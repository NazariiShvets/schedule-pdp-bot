import { IUser, PairController } from "../../../../../db";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import { successKeyboard, successText } from "./update-pair.keyboard";

const updatePairSubjectHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    await PairController.updatePair(
      {
        user_id: chatId,
        day: user.state.day,
        time: user.state.pair,
      },
      {
        subject: text,
      }
    );

    await TelegramAPI.sendMessage(chatId, {
      text: successText,
      reply_markup: {
        inline_keyboard: successKeyboard,
      },
    });
  } catch (error) {
    console.error(error);
    await errorHandler(chatId);
  }
};

export { updatePairSubjectHandler };
