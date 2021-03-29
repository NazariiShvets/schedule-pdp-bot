import { APIGatewayProxyEvent } from "aws-lambda";
import {
  defaultHandler,
  initialHandler,
  mainMenuHandler,
  scheduleDayEditHandler,
  scheduleDayEditPairHandler,
  scheduleDayHandler,
  scheduleHandler,
  startHandler,
  scheduleDayEditPairDetailsHandler,
} from "./handlers";
import { TelegramBody } from "../api";
import { db, UserController } from "../db";
import { STATES } from "./types";

const webhook = async (event: APIGatewayProxyEvent) => {
  try {
    await db.sync({ force: false });

    if (event.body) {
      const { message }: TelegramBody = JSON.parse(event.body);

      if (message) {
        const { chat, from, text } = message;
        const user = await UserController.getUser(from.id);

        if (!user) {
          await initialHandler(chat.id, from);

          return { statusCode: 200 };
        }
        console.log(user);

        switch (user.state.state) {
          case STATES.START:
            await startHandler(chat.id, user, text);

            break;

          case STATES.MAIN_MENU: {
            await mainMenuHandler(chat.id, user, text);

            break;
          }

          case STATES.SCHEDULE: {
            await scheduleHandler(chat.id, user, text);

            break;
          }

          case STATES.SCHEDULE_DAY: {
            await scheduleDayHandler(chat.id, user, text);

            break;
          }

          case STATES.SCHEDULE_DAY_EDIT: {
            await scheduleDayEditHandler(chat.id, user, text);

            break;
          }

          case STATES.SCHEDULE_DAY_EDIT_PAIR: {
            await scheduleDayEditPairHandler(chat.id, user, text);

            break;
          }

          case STATES.SCHEDULE_DAY_EDIT_PAIR_DETAILS: {
            await scheduleDayEditPairDetailsHandler(chat.id, user, text);

            break;
          }

          default:
            await defaultHandler(chat.id, user);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }

  return { statusCode: 200 };
};

export { webhook };
