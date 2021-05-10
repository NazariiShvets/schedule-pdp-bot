import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import { successKeyboard, successText } from "./show-pair-menu.keyboard";

const showPairMenuHandler = async (chatId: number) => {
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

export { showPairMenuHandler };
