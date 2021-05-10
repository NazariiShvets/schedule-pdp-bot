import { TelegramAPI } from "../../../../../api";
import { IUser, UserController } from "../../../../../db";
import { CreatePairSteps } from "../../../../types";
import { validateDay } from "../../../../../utils";
import { errorHandler } from "../../../error";
import {
  successKeyboard,
  invalidKeyboard,
  successText,
  invalidText,
} from "./create-pair-day.keyboard";

const createPairDayHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    const matchedDay = validateDay(text);

    if (matchedDay) {
      await TelegramAPI.sendMessage(chatId, {
        text: invalidText,
        reply_markup: {
          keyboard: invalidKeyboard,
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });

      return;
    }

    await UserController.updateUser(user.telegramId, {
      state: {
        ...user.state,
        state: CreatePairSteps.pair,
        day: matchedDay,
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

export { createPairDayHandler };
