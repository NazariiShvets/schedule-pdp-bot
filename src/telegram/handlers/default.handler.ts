import { TelegramAPI } from "../../api";
import { errorKeyboard } from "../keyboards";

const defaultHandler = async (chatId: number) => {
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

export { defaultHandler };
