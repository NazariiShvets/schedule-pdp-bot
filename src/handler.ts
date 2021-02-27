import { APIGatewayProxyEvent } from "aws-lambda";
import { Update } from "node-telegram-bot-api";
import { telegram } from "./telegram";

const webhook = async (event: APIGatewayProxyEvent) => {
  try {
    if (event.body) {
      const { message } = JSON.parse(event.body) as Update;

      if (message) {
        const { chat, text } = message;

        await telegram.sendMessage({
          chat_id: chat.id,
          text: `${text}`,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }

  return { statusCode: 200 };
};
export { webhook };
