import { PairController } from "../../../../../db";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import { DAYS } from "../../../../types";
import {
  emptyKeyboard,
  emptyText,
  getSuccessText,
  successKeyboard,
} from "./show-pair-day.keyboard";

const today = Object.values(DAYS)[new Date().getDay()];

const showPairsDayHandler = async (
  chatId: number,
  day = today,
  options?: {
    withoutKeyboard: boolean;
  }
) => {
  try {
    const pairs = await PairController.getAllPairs({
      user_id: chatId,
      day,
    });

    const replyMarkup = options?.withoutKeyboard
      ? {
          keyboard: emptyKeyboard,
          resize_keyboard: true,
          one_time_keyboard: true,
        }
      : {
          inline_keyboard: successKeyboard,
        };

    if (!pairs?.length) {
      await TelegramAPI.sendMessage(chatId, {
        text: emptyText,
        reply_markup: replyMarkup,
      });

      return;
    }

    await TelegramAPI.sendMessage(chatId, {
      text: getSuccessText(day, pairs),
      parse_mode: "HTML",
      reply_markup: replyMarkup,
    });
  } catch (error) {
    await errorHandler(chatId);
  }
};

export { showPairsDayHandler };
