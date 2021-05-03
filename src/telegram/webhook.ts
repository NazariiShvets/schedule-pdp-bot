import { APIGatewayProxyEvent } from "aws-lambda";
import { defaultHandler, initialHandler, mainMenuHandler } from "./handlers";
import { TelegramBody } from "../api";
import { db, UserController } from "../db";

const webhook = async (event: APIGatewayProxyEvent) => {
  try {
    await db.sync({ force: false });

    if (event.body) {
      const { message, callback_query }: TelegramBody = JSON.parse(event.body);

      if (message) {
        const { chat, from } = message;
        const user = await UserController.getUser(from.id);

        if (!user) {
          await initialHandler(chat.id, from);

          return { statusCode: 200 };
        }
      }

      if (callback_query) {
        const { from, data } = callback_query;

        const user = await UserController.getUser(from.id);

        console.log(data);

        if (user) {
          switch (data) {
            default: {
              await defaultHandler(from.id);
            }
          }
        }

        await defaultHandler(from.id);
      }
    }
  } catch (error) {
    console.log(error);
  }

  return { statusCode: 200 };
};

export { webhook };
