import { IUser, UserController } from "../../../../../db";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import {
  successSubjectText,
  successSubjectKeyboard,
} from "./update-pair.keyboard";
import { Callbacks } from "../../../../types";

const updatePairChooseOptionSubjectHandler = async (
  chatId: number,
  user: IUser
) => {
  try {
    await UserController.updateUser(user.telegramId, {
      ...user,
      state: { ...user.state, state: Callbacks.updatePairSubject },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: successSubjectText,
      reply_markup: {
        keyboard: successSubjectKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    console.error(error);
    await errorHandler(chatId);
  }
};

export { updatePairChooseOptionSubjectHandler };
