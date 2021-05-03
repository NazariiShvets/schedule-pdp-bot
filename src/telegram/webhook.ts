import { APIGatewayProxyEvent } from "aws-lambda";
import {
  createPairStartHandler,
  defaultHandler,
  initialHandler,
  mainMenuHandler,
} from "./handlers";
import { TelegramAPI, TelegramBody } from "../api";
import { db, UserController } from "../db";
import { Callbacks, CreatePairSteps } from "./types";
import { createPairDayHandler } from "./handlers/pair/create/createPairDay.handler";

const webhook = async (event: APIGatewayProxyEvent) => {
  try {
    await db.sync({ force: false });

    if (event.body) {
      const { message, callback_query }: TelegramBody = JSON.parse(event.body);

      if (message) {
        const { chat, from, text } = message;
        const user = await UserController.getUser(from.id);

        if (!user) {
          await initialHandler(chat.id, from);

          return;
        }

        switch (user.state.state) {
          case CreatePairSteps.day: {
            await createPairDayHandler(from.id, user, text);
            break;
          }

          case CreatePairSteps.pair: {
            break;
          }

          case CreatePairSteps.subject: {
            break;
          }

          case CreatePairSteps.teacher: {
            break;
          }

          default: {
            await defaultHandler(from.id);
          }
        }
      }

      if (callback_query) {
        const { from, data } = callback_query;

        const user = await UserController.getUser(from.id);

        if (user) {
          const prevMessage = callback_query.message?.message_id;

          if (prevMessage) {
            await TelegramAPI.deleteMessage(from.id, prevMessage);
          }

          switch (data) {
            case Callbacks.mainMenu: {
              await mainMenuHandler(from.id);
              break;
            }

            case Callbacks.createPair: {
              await createPairStartHandler(from.id, user);

              break;
            }

            default: {
              await defaultHandler(from.id);
            }
          }

          return;
        }

        await defaultHandler(from.id);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    // eslint-disable-next-line consistent-return,no-unsafe-finally
    return { statusCode: 200 };
  }
};

export { webhook };
