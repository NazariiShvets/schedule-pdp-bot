import { TelegramAPI } from "../../../api";
import { successKeyboard, successText } from "./error.keyboard";

const errorHandler = async (chatId: number) => {
  try {
    await TelegramAPI.sendMessage(chatId, {
      text: successText,
      reply_markup: {
        inline_keyboard: successKeyboard,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export { errorHandler };
