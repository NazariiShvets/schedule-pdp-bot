import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { showPairDayMenuKeyboard } from "../../../keyboards";
import { UserController } from "../../../../db";
import { Callbacks } from "../../../types";

const showPairsChooseDayHandler = async (chatId: number) => {
  try {
    await UserController.updateUser(chatId, {
      state: { state: Callbacks.showScheduleDay },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: "Вибери день",
      reply_markup: {
        keyboard: showPairDayMenuKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { showPairsChooseDayHandler };
