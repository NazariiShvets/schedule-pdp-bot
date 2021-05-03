import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { IUser, PairController, UserController } from "../../../../db";
import { CreatePairSteps } from "../../../types";
import { backToMainMenuButton } from "../../../new_keyboards/shared.button";

const createPairTeacherHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    await UserController.updateUser(user.telegramId, {
      state: {
        state: CreatePairSteps.subject,
        day: user.state.day,
        pair: user.state.pair,
        subject: user.state.subject,
        teacher: text,
      },
    });

    const pair = await PairController.createPair({
      user_id: user.telegramId,
      day: user.state.day!,
      time: user.state.pair!,
      subject: user.state.subject!,
      teacher: text,
    });

    console.log(pair);

    await TelegramAPI.sendMessage(chatId, {
      text: "Круто! Я буду надсилати тобі сповіщення за 5 хв до початку пари)",
      reply_markup: {
        inline_keyboard: [[backToMainMenuButton]],
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { createPairTeacherHandler };
