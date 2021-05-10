import { errorHandler } from "../../../error";
import {
  emptyKeyboard,
  emptyText,
  getSuccessText,
  invalidKeyboard,
  invalidText,
  successKeyboard,
} from "./delete-pair-time.keyboard";
import { IUser, PairController, UserController } from "../../../../../db";
import { validatePair } from "../../../../../utils";
import { TelegramAPI } from "../../../../../api";

const deletePairTimeHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    const matchedPair = validatePair(text);

    if (!matchedPair) {
      await TelegramAPI.sendMessage(chatId, {
        text: invalidText,
        reply_markup: {
          keyboard: invalidKeyboard,
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
        text: emptyText,
        reply_markup: {
          inline_keyboard: emptyKeyboard,
        },
      });

      return;
    }

    await UserController.updateUser(chatId, {
      state: { ...user.state, pair: matchedPair },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: getSuccessText(user.state.day!, pairs),
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: successKeyboard,
      },
    });
  } catch (error) {
    await errorHandler(chatId);
  }
};

export { deletePairTimeHandler };
