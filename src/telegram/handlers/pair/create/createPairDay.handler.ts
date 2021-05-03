import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import {
  createPairDaysKeyboard,
  createPairTimeKeyboard,
} from "../../../new_keyboards";
import { IUser, UserController } from "../../../../db";
import { CreatePairSteps, DAYS } from "../../../types";

const createPairDayHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    const matchedDay = Object.values(DAYS).find(
      (day) => day.toLowerCase() === text.toLowerCase()
    );

    if (matchedDay) {
      await UserController.updateUser(user.telegramId, {
        state: { state: CreatePairSteps.pair, day: matchedDay },
      });

      await TelegramAPI.sendMessage(chatId, {
        text: "Ок, тепер введи час пари",
        reply_markup: {
          keyboard: createPairTimeKeyboard,
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });

      return;
    }

    await TelegramAPI.sendMessage(chatId, {
      text: "Введений день невалідний. Введи валідний день",
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

export { createPairDayHandler };
