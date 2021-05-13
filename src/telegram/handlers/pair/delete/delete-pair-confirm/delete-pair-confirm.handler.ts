import { IUser, PairController, UserController } from "../../../../../db";
import { TelegramAPI } from "../../../../../api";
import { Callbacks } from "../../../../types";
import { successKeyboard, successText } from "./delete-pair-confirm.keyboard";
import { errorHandler } from "../../../error";

const deletePairConfirmHandler = async (chatId: number, user: IUser) => {
  try {
    await PairController.deletePair({
      user_id: chatId,
      day: user.state.day,
      time: user.state.pair,
    });

    await UserController.updateUser(chatId, {
      state: { state: Callbacks.mainMenu },
    });

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

export { deletePairConfirmHandler };
