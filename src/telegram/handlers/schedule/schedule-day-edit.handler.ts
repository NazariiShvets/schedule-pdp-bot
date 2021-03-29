import { IUser, UserController } from "../../../db";
import { PAIRS_TIME, STATES } from "../../types";
import { errorKeyboard } from "../../keyboards/error.keyboard";
import { startHandler } from "../start.handler";
import { defaultHandler } from "../default.handler";
import { TelegramAPI } from "../../../api";
import { enumValuesToArray } from "../../../utils";
import { schedulePairEditKeyboard } from "../../keyboards/shedule.keyboard";

const scheduleDayEditHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    switch (true) {
      case enumValuesToArray(PAIRS_TIME).includes(text): {
        await UserController.updateUser(user.telegramId, {
          state: {
            state: STATES.SCHEDULE_DAY_EDIT_PAIR,
            day: user.state.day,
            pair: enumValuesToArray(PAIRS_TIME).find((pair) => pair === text),
          },
        });

        await TelegramAPI.sendMessage(chatId, {
          text: "Вибери що саме хочеш відредагувати",

          reply_markup: {
            keyboard: schedulePairEditKeyboard,
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

export { scheduleDayEditHandler };
