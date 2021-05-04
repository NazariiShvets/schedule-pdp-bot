import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { IUser, UserController } from "../../../../db";
import { CreatePairSteps } from "../../../types";
import { backToMainMenuButton } from "../../../keyboards";

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
      text: "Ок, тепер викладач. Як його звуть?",
      reply_markup: {
        keyboard: [[backToMainMenuButton]],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { createPairSubjectHandler };
