import { TelegramAPI } from "../../../../../api";
import { IUser, UserController } from "../../../../../db";
import { CreatePairSteps } from "../../../../types";
import { errorHandler } from "../../../error";
import { successKeyboard, successText } from "./create-pair-start.keyboard";

const createPairStartHandler = async (chatId: number, user: IUser) => {
  try {
    await UserController.updateUser(user.telegramId, {
      state: { state: CreatePairSteps.day },
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

export { createPairStartHandler };
