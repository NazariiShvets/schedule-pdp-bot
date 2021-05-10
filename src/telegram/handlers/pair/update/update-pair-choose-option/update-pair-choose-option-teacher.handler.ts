import { IUser, UserController } from "../../../../../db";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import {
  successTeacherText,
  successTeacherKeyboard,
} from "./update-pair.keyboard";
import { Callbacks } from "../../../../types";

const updatePairChooseOptionTeacherHandler = async (
  chatId: number,
  user: IUser
) => {
  try {
    await UserController.updateUser(user.telegramId, {
      ...user,
      state: { ...user.state, state: Callbacks.updatePairTeacher },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: successTeacherText,
      reply_markup: {
        keyboard: successTeacherKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    console.error(error);
    await errorHandler(chatId);
  }
};

export { updatePairChooseOptionTeacherHandler };
