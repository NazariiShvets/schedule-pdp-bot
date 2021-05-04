import { APIGatewayProxyEvent } from "aws-lambda";
import { TelegramAPI, TelegramBody } from "../api";
import { db, UserController } from "../db";
import { Callbacks, CreatePairSteps } from "./types";
import { backToMainMenuButton } from "./new_keyboards";
import {
  createPairDayHandler,
  createPairStartHandler,
  createPairSubjectHandler,
  createPairTimeHandler,
  defaultHandler,
  initialHandler,
  mainMenuHandler,
  createPairTeacherHandler,
} from "./handlers";

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

        if (text === backToMainMenuButton.text) {
          await UserController.updateUser(from.id, {
            state: { state: Callbacks.mainMenu },
          });

          await mainMenuHandler(from.id);

          return;
        }

        switch (user.state.state) {
          case CreatePairSteps.day: {
            await createPairDayHandler(from.id, user, text);
            break;
          }

          case CreatePairSteps.pair: {
            await createPairTimeHandler(from.id, user, text);
            break;
          }

          case CreatePairSteps.subject: {
            await createPairSubjectHandler(from.id, user, text);
            break;
          }

          case CreatePairSteps.teacher: {
            await createPairTeacherHandler(from.id, user, text);
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

          await UserController.updateUser(from.id, {
            state: { state: Callbacks.mainMenu },
          });

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
