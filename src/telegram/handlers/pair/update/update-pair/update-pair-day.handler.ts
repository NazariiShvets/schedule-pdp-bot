import { IUser, PairController } from "../../../../../db";
import { validateDay } from "../../../../../utils";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import {
  invalidDayKeyboard,
  invalidDayText,
  successKeyboard,
  successText,
} from "./update-pair.keyboard";

const updatePairDayHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    const matchedDay = validateDay(text);

    if (!matchedDay) {
      await TelegramAPI.sendMessage(chatId, {
        text: invalidDayText,
        reply_markup: {
          keyboard: invalidDayKeyboard,
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
        day: matchedDay,
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

export { updatePairDayHandler };
