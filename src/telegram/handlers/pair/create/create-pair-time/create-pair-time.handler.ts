import { IUser, UserController } from "../../../../../db";
import { validatePair } from "../../../../../utils";
import { CreatePairSteps } from "../../../../types";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import {
  invalidKeyboard,
  invalidText,
  successKeyboard,
  successText,
} from "./create-pair-time.keyboard";

const createPairTimeHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    const matchedPair = validatePair(text);

    if (matchedPair) {
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
        state: CreatePairSteps.subject,
        pair: matchedPair,
      },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: successText,
      reply_markup: {
        keyboard: successKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } catch (error) {
    await errorHandler(chatId);
  }
};

export { createPairTimeHandler };
