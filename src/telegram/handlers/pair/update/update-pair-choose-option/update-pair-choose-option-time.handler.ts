import { IUser, UserController } from "../../../../../db";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import { successTimeKeyboard, successTimeText } from "./update-pair.keyboard";
import { Callbacks } from "../../../../types";

const updatePairChooseOptionTimeHandler = async (
  chatId: number,
  user: IUser
) => {
  try {
    await UserController.updateUser(user.telegramId, {
      ...user,
      state: { ...user.state, state: Callbacks.updatePairTime },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: successTimeText,
      reply_markup: {
        keyboard: successTimeKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    console.error(error);
    await errorHandler(chatId);
  }
};

export { updatePairChooseOptionTimeHandler };
