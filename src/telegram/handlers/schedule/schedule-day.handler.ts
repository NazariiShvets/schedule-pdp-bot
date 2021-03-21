import { IUser, UserController } from "../../../db";
import { TelegramAPI } from "../../../api";
import { STATES } from "../../types";
import { scheduleDayKeyboard } from "../../keyboards/shedule.keyboard";
import { errorKeyboard } from "../../keyboards/error.keyboard";
import { startHandler } from "../start.handler";
import { defaultHandler } from "../default.handler";

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
