import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { errorKeyboard, showPairTodayMenuKeyboard } from "../../../keyboards";
import { PairController } from "../../../../db";
import { DAYS } from "../../../types";

const today = Object.values(DAYS)[new Date().getDay()];

const showPairsDayHandler = async (
  chatId: number,
  day: string = today,
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
          keyboard: errorKeyboard,
          resize_keyboard: true,
          one_time_keyboard: true,
        }
      : {
          inline_keyboard: showPairTodayMenuKeyboard,
        };

    if (!pairs?.length) {
      await TelegramAPI.sendMessage(chatId, {
        text: `Список пар пустий`,
        reply_markup: replyMarkup,
      });

      return;
    }

    await TelegramAPI.sendMessage(chatId, {
      text: `<b><u>${day}</u></b>\n\n${pairs
        .map(
          (pair) =>
            `<b>Час</b>: <i>${pair.time}</i>\n<b>Предмет</b>: <i>${pair.subject}</i>\n<b>Викладач</b>: <i>${pair.teacher}</i>\n`
        )
        .join("\n")}`,

      parse_mode: "HTML",
      reply_markup: replyMarkup,
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { showPairsDayHandler };
