import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { createPairDaysKeyboard } from "../../../new_keyboards";
import { IUser, UserController } from "../../../../db";
import { CreatePairSteps } from "../../../types";

const createPairStartHandler = async (chatId: number, user: IUser) => {
  try {
    await UserController.updateUser(user.telegramId, {
      state: { state: CreatePairSteps.day },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: "Ок, давай виберем день в який буде проходити пара)",
      reply_markup: {
        keyboard: createPairDaysKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { createPairStartHandler };
