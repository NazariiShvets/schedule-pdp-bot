import {
  invalidKeyboard,
  invalidText,
  successKeyboard,
  successText,
} from "./update-pair-day.keyboard";
import { IUser, UserController } from "../../../../../db";
import { validateDay } from "../../../../../utils";
import { UpdatePairSteps } from "../../../../types";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";

const updatePairDayHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    const matchedDay = validateDay(text);

    if (!matchedDay) {
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
        state: UpdatePairSteps.pair,
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

export { updatePairDayHandler };
