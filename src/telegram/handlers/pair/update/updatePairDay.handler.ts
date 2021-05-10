import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import {
  updatePairDayMenuKeyboard,
  updatePairTimeMenuKeyboard,
} from "../../../keyboards";
import { IUser, UserController } from "../../../../db";
import { UpdatePairSteps } from "../../../types";
import { validateDay } from "../../../../utils";

const updatePairDayHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    const matchedDay = validateDay(text);

    if (matchedDay) {
      await UserController.updateUser(user.telegramId, {
        state: {
          ...user.state,
          state: UpdatePairSteps.pair,
          day: matchedDay,
        },
      });

      await TelegramAPI.sendMessage(chatId, {
        text: "Ок, тепер введи час пари",
        reply_markup: {
          keyboard: updatePairTimeMenuKeyboard,
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });

      return;
    }

    await TelegramAPI.sendMessage(chatId, {
      text: "Введений день невалідний. Введи валідний день",
      reply_markup: {
        keyboard: updatePairDayMenuKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { updatePairDayHandler };
