import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { IUser, UserController } from "../../../../db";
import { CreatePairSteps } from "../../../types";

const createPairSubjectHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    await UserController.updateUser(user.telegramId, {
      state: {
        state: CreatePairSteps.teacher,
        day: user.state.day,
        pair: user.state.pair,
        subject: text,
      },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: "Ок, тепер викладач. Як його звуть?",
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { createPairSubjectHandler };
