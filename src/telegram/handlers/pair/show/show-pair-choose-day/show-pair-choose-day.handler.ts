import { UserController } from "../../../../../db";
import { Callbacks } from "../../../../types";
import { TelegramAPI } from "../../../../../api";
import { errorHandler } from "../../../error";
import { successKeyboard, successText } from "./show-pair-choose-day.keyboard";

const showPairsChooseDayHandler = async (chatId: number) => {
  try {
    await UserController.updateUser(chatId, {
      state: { state: Callbacks.showScheduleDay },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: successText,
      reply_markup: {
        keyboard: successKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } catch (error) {
    console.error(error);
    await errorHandler(chatId);
  }
};

export { showPairsChooseDayHandler };
