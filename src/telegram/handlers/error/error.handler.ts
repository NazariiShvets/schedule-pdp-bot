import { TelegramAPI } from "../../../api";
import { errorKeyboard } from "./error.keyboard";

const errorHandler = async (chatId: number) => {
  try {
    await TelegramAPI.sendMessage(chatId, {
      text: "Щось пішло не так",
      reply_markup: {
        inline_keyboard: errorKeyboard,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export { errorHandler };
