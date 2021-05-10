import { successKeyboard, successText } from "./update-pair-menu.keyboard";
import { TelegramAPI } from "../../../../../api";
import { UserController } from "../../../../../db";
import { UpdatePairSteps } from "../../../../types";
import { errorHandler } from "../../../error";

const updatePairMenuHandler = async (chatId: number) => {
  try {
    await UserController.updateUser(chatId, {
      state: { state: UpdatePairSteps.day },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: successText,
      reply_markup: {
        keyboard: successKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    await errorHandler(chatId);
  }
};

export { updatePairMenuHandler };
