import { TelegramAPI } from "../../api";
import { defaultHandler } from "./default.handler";
import { scheduleKeyboard } from "../new_keyboards";

const mainMenuHandler = async (chatId: number) => {
  try {
    await TelegramAPI.sendMessage(chatId, {
      text: "Ти в головному меню. Вибирай",
      reply_markup: {
        inline_keyboard: scheduleKeyboard,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { mainMenuHandler };
