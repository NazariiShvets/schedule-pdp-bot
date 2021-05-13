import { IUser, UserController } from "../../../../../db";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import { successDayText, successDayKeyboard } from "./update-pair.keyboard";
import { Callbacks } from "../../../../types";

const updatePairChooseOptionDayHandler = async (
  chatId: number,
  user: IUser
) => {
  try {
    await UserController.updateUser(user.telegramId, {
      ...user,
      state: { ...user.state, state: Callbacks.updatePairDay },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: successDayText,
      reply_markup: {
        keyboard: successDayKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    console.error(error);
    await errorHandler(chatId);
  }
};

export { updatePairChooseOptionDayHandler };
