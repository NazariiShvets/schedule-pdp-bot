import { TelegramAPI } from "../../../api";
import { successKeyboard, successText } from "./main-menu.keyboard";
import { errorHandler } from "../error";

const mainMenuHandler = async (chatId: number) => {
  try {
    await TelegramAPI.sendMessage(chatId, {
      text: successText,
      reply_markup: {
        inline_keyboard: successKeyboard,
      },
    });
  } catch (error) {
    console.error(error);
    await errorHandler(chatId);
  }
};

export { mainMenuHandler };
