import { IUser, UserController } from "../../../db";
import { PAIRS, STATES } from "../../types";
import { schedulePairKeyboard } from "../../keyboards/shedule.keyboard";
import { errorKeyboard } from "../../keyboards/error.keyboard";
import { startHandler } from "../start.handler";
import { defaultHandler } from "../default.handler";
import { TelegramAPI } from "../../../api";
import { enumValuesToArray } from "../../../utils";

const scheduleDayHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    switch (true) {
      case enumValuesToArray(PAIRS).includes(text): {
        await UserController.updateUser(user.telegramId, {
          state: {
            state: STATES.SCHEDULE_DAY_EDIT,
            day: user.state.day,
            pair: enumValuesToArray(PAIRS).find((pair) => pair === text),
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
