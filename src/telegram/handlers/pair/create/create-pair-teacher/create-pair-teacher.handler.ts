import { IUser, PairController, UserController } from "../../../../../db";
import { Callbacks } from "../../../../types";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import { successKeyboard, successText } from "./create-pair-teacher.keyboard";

const createPairTeacherHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    await PairController.createPair({
      user_id: user.telegramId,
      day: user.state.day!,
      time: user.state.pair!,
      subject: user.state.subject!,
      teacher: text,
    });

    await UserController.updateUser(user.telegramId, {
      state: {
        state: Callbacks.mainMenu,
      },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: successText,
      reply_markup: {
        inline_keyboard: successKeyboard,
      },
    });
  } catch (error) {
    await errorHandler(chatId);
  }
};

export { createPairTeacherHandler };
