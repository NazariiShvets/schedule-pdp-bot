import { IUser, PairController } from "../../../../../db";
import { validatePair } from "../../../../../utils";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import {
  invalidPairTimeKeyboard,
  invalidPairTimeText,
  successKeyboard,
  successText,
} from "./update-pair.keyboard";

const updatePairTimeHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    const matchedPair = validatePair(text);

    if (!matchedPair) {
      await TelegramAPI.sendMessage(chatId, {
        text: invalidPairTimeText,
        reply_markup: {
          keyboard: invalidPairTimeKeyboard,
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });

      return;
    }

    await PairController.updatePair(
      {
        user_id: chatId,
        day: user.state.day,
        time: user.state.pair,
      },
      {
        time: matchedPair,
      }
    );

    await TelegramAPI.sendMessage(chatId, {
      text: successText,
      reply_markup: {
        inline_keyboard: successKeyboard,
      },
    });
  } catch (error) {
    console.error(error);
    await errorHandler(chatId);
  }
};

export { updatePairTimeHandler };
