import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import {
  createPairTimeKeyboard,
  backToMainMenuButton,
} from "../../../keyboards";
import { IUser, UserController } from "../../../../db";
import { CreatePairSteps } from "../../../types";
import { validatePair } from "../../../../utils";

const createPairTimeHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    const matchedPair = validatePair(text);

    if (matchedPair) {
      await UserController.updateUser(user.telegramId, {
        state: {
          ...user.state,
          state: CreatePairSteps.subject,
          pair: matchedPair,
        },
      });

      await TelegramAPI.sendMessage(chatId, {
        text: "Ок, тепер введи предмет",
        reply_markup: {
          keyboard: [[backToMainMenuButton]],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      });

      return;
    }

    await TelegramAPI.sendMessage(chatId, {
      text: "Введений час невалідний. Введи валідний час",
      reply_markup: {
        keyboard: createPairTimeKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { createPairTimeHandler };
