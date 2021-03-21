import { IUser, UserController } from "../../../db";
import { STATES } from "../../types";
import {
  scheduleDayKeyboard,
  schedulePairKeyboard,
} from "../../keyboards/shedule.keyboard";
import { errorKeyboard } from "../../keyboards/error.keyboard";
import { startHandler } from "../start.handler";
import { defaultHandler } from "../default.handler";
import { TelegramAPI } from "../../../api";

const scheduleDayHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    switch (true) {
      case scheduleDayKeyboard[0][0].text.includes(text): {
        await UserController.updateUser(user.telegramId, {
          state: {
            state: STATES.SCHEDULE_DAY_EDIT,
            day: user.state.day,
          },
        });

        await TelegramAPI.sendMessage(chatId, {
          text: "Вибери пару",
          reply_markup: {
            inline_keyboard: schedulePairKeyboard,
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });

        break;
      }

      case errorKeyboard[0][0].text.includes(text): {
        await startHandler(chatId, user, text);

        break;
      }

      default: {
        await defaultHandler(chatId, user);
      }
    }
  } catch (error) {
    console.log(error);

    await defaultHandler(chatId, user);
  }
};

export { scheduleDayHandler };
