import { successKeyboard, successText } from "./delete-pair-menu.keyboard";
import { UserController } from "../../../../../db";
import { DeletePairSteps } from "../../../../types";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";

const deletePairMenuHandler = async (chatId: number) => {
  try {
    await UserController.updateUser(chatId, {
      state: { state: DeletePairSteps.day },
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

export { deletePairMenuHandler };
