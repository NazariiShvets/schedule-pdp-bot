import { defaultHandler } from "../../default.handler";
import { DAYS } from "../../../types";
import { showPairsDayHandler } from "./showPairsDayHandler";
import { TelegramAPI } from "../../../../api";
import { showPairTodayMenuKeyboard } from "../../../keyboards";

const showPairsWeekHandler = async (chatId: number) => {
  try {
    const days = Object.values(DAYS);

    await days.reduce(async (promise, day) => {
      await promise;

      await showPairsDayHandler(chatId, day, { withoutKeyboard: true });
    }, Promise.resolve());

    await TelegramAPI.sendMessage(chatId, {
      text: "Хочеш повернутись назад?",
      reply_markup: {
        inline_keyboard: showPairTodayMenuKeyboard,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { showPairsWeekHandler };
