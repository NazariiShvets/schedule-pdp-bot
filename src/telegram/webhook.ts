import { APIGatewayProxyEvent } from "aws-lambda";
import { defaultHandler, initialHandler, mainMenuHandler } from "./handlers";
import { TelegramBody } from "../api";
import { db, UserController } from "../db";
import { Callbacks } from "./new_keyboards/callbacks.";
import { deletePreviousMessage } from "../utils";

const webhook = async (event: APIGatewayProxyEvent) => {
  try {
    await db.sync({ force: false });

    if (event.body) {
      const { message, callback_query }: TelegramBody = JSON.parse(event.body);

      if (message) {
        const { chat, from } = message;
        const user = await UserController.getUser(from.id);

        if (!user) {
          return initialHandler(chat.id, from);
        }

        return defaultHandler(from.id);
      }

      if (callback_query) {
        const { from, data } = callback_query;

        const user = await UserController.getUser(from.id);

        if (user) {
          await deletePreviousMessage(
            from.id,
            callback_query.message?.message_id
          );

          switch (data) {
            case Callbacks.mainMenu: {
              return mainMenuHandler(from.id);
            }

            default: {
              return defaultHandler(from.id);
            }
          }
        }

        return defaultHandler(from.id);
      }
    }
  } catch (error) {
    console.log(error);
  }

  return { statusCode: 200 };
};

export { webhook };
