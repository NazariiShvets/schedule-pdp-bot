import { IUser, UserController } from "../../../db";
import { STATES } from "../../types";
import { startHandler } from "../start.handler";
import { defaultHandler } from "../default.handler";
import { TelegramAPI } from "../../../api";
import {
  editPairListKeyboard,
  errorKeyboard,
  pairListCreateKeyboard,
  pairListEditKeyboard,
} from "../../keyboards";

const scheduleDayHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    switch (true) {
      case pairListCreateKeyboard[0][0].text.includes(text): {
        await UserController.updateUser(user.telegramId, {
          state: {
            ...user.state,
            state: STATES.SCHEDULE_DAY_CREATE,
          },
        });

        await TelegramAPI.sendMessage(chatId, {
          text: "Введи назву пари",
        });

        break;
      }

      case pairListEditKeyboard[0][0].text.includes(text): {
        await UserController.updateUser(user.telegramId, {
          state: {
            state: STATES.SCHEDULE_DAY_EDIT,
            day: user.state.day,
          },
        });

        await TelegramAPI.sendMessage(chatId, {
          text: "Вибери пару",
          reply_markup: {
            keyboard: editPairListKeyboard,
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
