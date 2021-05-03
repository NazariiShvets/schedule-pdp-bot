import { TelegramAPI } from "../../api";
import { errorKeyboard } from "../new_keyboards";

const defaultHandler = async (chatId: number) => {
  await TelegramAPI.sendMessage(chatId, {
    text: "Щось пішло не так",
    reply_markup: {
      inline_keyboard: errorKeyboard,
    },
  });
};

export { defaultHandler };
