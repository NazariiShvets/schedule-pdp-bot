import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import {
  confirmDeletePairKeyboard,
  createPairTimeKeyboard,
  emptyPairListKeyboard,
} from "../../../keyboards";
import { IUser, PairController, UserController } from "../../../../db";
import { PAIRS_TIME } from "../../../types";

const deletePairTimeHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    const matchedPair = Object.values(PAIRS_TIME).find(
      (pair) => pair.toLowerCase() === text.toLowerCase()
    );

    if (matchedPair) {
      const pairs = await PairController.getAllPairs({
        user_id: chatId,
        day: user.state.day,
        time: matchedPair,
      });

      if (!pairs?.length) {
        await TelegramAPI.sendMessage(chatId, {
          text: `Список пар пустий`,
          reply_markup: {
            inline_keyboard: emptyPairListKeyboard,
          },
        });

        return;
      }

      await UserController.updateUser(chatId, {
        state: { ...user.state, pair: matchedPair },
      });

      await TelegramAPI.sendMessage(chatId, {
        text: `<b><u>${user.state.day}</u></b>\n\n${pairs
          .map(
            (pair) =>
              `<b>Час</b>: <i>${pair.time}</i>\n<b>Предмет</b>: <i>${pair.subject}</i>\n<b>Викладач</b>: <i>${pair.teacher}</i>\n`
          )
          .join("\n")}\n\nТи дійсно хочеш її видалити?`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: confirmDeletePairKeyboard,
        },
      });

      return;
    }

    await TelegramAPI.sendMessage(chatId, {
      text: "Введений час невалідний. Введи валідний час",
      reply_markup: {
        keyboard: createPairTimeKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { deletePairTimeHandler };
