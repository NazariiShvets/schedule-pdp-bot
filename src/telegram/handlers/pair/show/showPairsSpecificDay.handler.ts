import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { showPairDayMenuKeyboard } from "../../../keyboards";
import { DAYS } from "../../../types";
import { showPairsDayHandler } from "./showPairsDayHandler";
import { IUser } from "../../../../db";

const showPairsSpecificDayHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    const matchedDay = Object.values(DAYS).find(
      (day) => day.toLowerCase() === text.toLowerCase()
    );

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
