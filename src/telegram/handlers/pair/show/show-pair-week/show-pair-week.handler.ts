import { TelegramAPI } from "../../../../../api";
import { showPairsDayHandler } from "../show-pair-day";
import { errorHandler } from "../../../error";
import { DAYS } from "../../../../types";
import { successKeyboard, successText } from "./show-pair-week.keyboard";

const days = Object.values(DAYS);

const showPairsWeekHandler = async (chatId: number) => {
  try {
    await days.reduce(async (promise, day) => {
      await promise;

      await showPairsDayHandler(chatId, day, { withoutKeyboard: true });
    }, Promise.resolve());

    await TelegramAPI.sendMessage(chatId, {
      text: successText,
      reply_markup: {
        inline_keyboard: successKeyboard,
      },
    });
  } catch (error) {
    await errorHandler(chatId);
  }
};

export { showPairsWeekHandler };
