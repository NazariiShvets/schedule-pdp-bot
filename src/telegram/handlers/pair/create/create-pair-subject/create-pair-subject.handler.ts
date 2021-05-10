import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import { CreatePairSteps } from "../../../../types";
import { IUser, UserController } from "../../../../../db";
import { successKeyboard, successText } from "./create-pair-subject.keyboard";

const createPairSubjectHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    await UserController.updateUser(user.telegramId, {
      state: {
        ...user.state,
        state: CreatePairSteps.teacher,
        subject: text,
      },
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

export { createPairSubjectHandler };
