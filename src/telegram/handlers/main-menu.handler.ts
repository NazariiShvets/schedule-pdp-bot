import { IUser, UserController } from "../../db";
import { TelegramAPI } from "../../api";
import { STATES } from "../types";
import { defaultHandler } from "./default.handler";
import { errorKeyboard, mainKeyboard, scheduleKeyboard } from "../keyboards";

const mainMenuHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    switch (true) {
      case mainKeyboard[0][0].text.includes(text): {
        await UserController.updateUser(user.telegramId, {
          state: { state: STATES.SCHEDULE },
        });

        await TelegramAPI.sendMessage(chatId, {
          text: "Значить розклад... Вибирай",
          reply_markup: {
            keyboard: scheduleKeyboard,
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });

        break;
      }

      case mainKeyboard[1][0].text.includes(text): {
        await UserController.updateUser(user.telegramId, {
          state: { state: STATES.START },
        });

        await TelegramAPI.sendMessage(chatId, {
          text: "На жаль, розробнику писати заборонено",
          reply_markup: {
            keyboard: errorKeyboard,
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });
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

export { mainMenuHandler };
