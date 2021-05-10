import { TelegramAPI } from "../../../api";
import { mainMenuKeyboard, mainMenuText } from "./main-menu.keyboard";
import { errorHandler } from "../error";

const mainMenuHandler = async (chatId: number) => {
  try {
    await TelegramAPI.sendMessage(chatId, {
      text: mainMenuText,
      reply_markup: {
        inline_keyboard: mainMenuKeyboard,
      },
    });
  } catch (error) {
    await errorHandler(chatId);
  }
};

export { mainMenuHandler };
