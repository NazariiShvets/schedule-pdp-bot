import {
  invalidKeyboard,
  invalidText,
  successKeyboard,
  successText,
} from "./delete-pair-day.keyboard";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import { DeletePairSteps } from "../../../../types";
import { IUser, UserController } from "../../../../../db";
import { validateDay } from "../../../../../utils";

const deletePairDayHandler = async (chatId: number, user: IUser, text = "") => {
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
        state: DeletePairSteps.pair,
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

export { deletePairDayHandler };
