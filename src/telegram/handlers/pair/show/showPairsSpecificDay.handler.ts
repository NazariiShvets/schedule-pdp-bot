import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { showPairDayMenuKeyboard } from "../../../keyboards";
import { showPairsDayHandler } from "./showPairsDayHandler";
import { validateDay } from "../../../../utils";

const showPairsSpecificDayHandler = async (chatId: number, text = "") => {
  try {
    const matchedDay = validateDay(text);

    if (!matchedDay) {
      await TelegramAPI.sendMessage(chatId, {
        text: "Введений день невалідний. Введи валідний день",
        reply_markup: {
          keyboard: showPairDayMenuKeyboard,
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });

      return;
    }

    await showPairsDayHandler(chatId, matchedDay);
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { showPairsSpecificDayHandler };
