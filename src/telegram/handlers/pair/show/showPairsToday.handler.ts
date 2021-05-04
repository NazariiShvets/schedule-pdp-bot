import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { showPairMenuKeyboard } from "../../../keyboards";
import { PairController } from "../../../../db";
import { DAYS } from "../../../types";

const showPairsTodayHandler = async (chatId: number) => {
  try {
    const day = Object.values(DAYS)[new Date().getDay()];

    const pairs = await PairController.getAllPairs({
      user_id: chatId,
      day,
    });

    if (!pairs?.length) {
      await TelegramAPI.sendMessage(chatId, {
        text: `Список пар пустий`,
        reply_markup: {
          inline_keyboard: showPairMenuKeyboard,
        },
      });

      return;
    }

    await TelegramAPI.sendMessage(chatId, {
      text: pairs
        .map(
          (pair) =>
            `Час: ${pair.time}\nПредмет: ${pair.subject}\nВикладач: ${pair.teacher}\n`
        )
        .join("\n"),

      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: showPairMenuKeyboard,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { showPairsTodayHandler };
