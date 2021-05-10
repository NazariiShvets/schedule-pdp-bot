import { validateDay } from "../../../../../utils";
import { TelegramAPI } from "../../../../../api";
import { invalidText } from "./show-pair-specific.keyboard";
import { successKeyboard } from "../show-pair-day/show-pair-day.keyboard";
import { showPairsDayHandler } from "../show-pair-day";
import { errorHandler } from "../../../error";

const showPairsSpecificDayHandler = async (chatId: number, text = "") => {
  try {
    const matchedDay = validateDay(text);

    if (!matchedDay) {
      await TelegramAPI.sendMessage(chatId, {
        text: invalidText,
        reply_markup: {
          keyboard: successKeyboard,
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });

      return;
    }

    await showPairsDayHandler(chatId, matchedDay);
  } catch (error) {
    await errorHandler(chatId);
  }
};

export { showPairsSpecificDayHandler };
