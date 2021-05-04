import { defaultHandler } from "../../default.handler";
import { IUser, PairController, UserController } from "../../../../db";
import { Callbacks } from "../../../types";
import { TelegramAPI } from "../../../../api";
import { errorKeyboard } from "../../../keyboards";

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
      text: "Успішно видалено",
      reply_markup: {
        inline_keyboard: errorKeyboard,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { deletePairConfirmHandler };
