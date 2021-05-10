import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import {
  backToMainMenuButton,
  updatePairTimeMenuKeyboard,
} from "../../../keyboards";
import { IUser, PairController, UserController } from "../../../../db";
import { createPairsText, validatePair } from "../../../../utils";

const updatePairTimeHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    const matchedPair = validatePair(text);

    if (matchedPair) {
      await TelegramAPI.sendMessage(chatId, {
        text: "Введений час невалідний. Введи валідний час",
        reply_markup: {
          keyboard: updatePairTimeMenuKeyboard,
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });

      return;
    }

    const pairs = await PairController.getAllPairs({
      user_id: chatId,
      day: user.state.day,
      time: matchedPair,
    });

    if (!pairs?.length) {
      await TelegramAPI.sendMessage(chatId, {
        text: `Список пар пустий`,
        reply_markup: {
          inline_keyboard: [[backToMainMenuButton]],
        },
      });

      return;
    }

    await UserController.updateUser(chatId, {
      state: { ...user.state, pair: matchedPair },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: `<b><u>${user.state.day}</u></b>\n\n${createPairsText(
        pairs
      )}\n\nЩо ти хочеш в ній змінити?`,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[backToMainMenuButton]],
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { updatePairTimeHandler };
