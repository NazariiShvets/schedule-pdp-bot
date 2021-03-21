import { IUser, UserController } from "../../db";
import { TelegramAPI } from "../../api";
import { mainMenuKeyboard } from "../keyboards/main-menu.keyboard";
import { STATES } from "../types";
import { scheduleKeyboard } from "../keyboards/shedule.keyboard";
import { errorKeyboard } from "../keyboards/error.keyboard";

const mainMenuHandler = async (
  chatId: number,
  { telegramId }: IUser,
  text = ""
) => {
  try {
    switch (true) {
      case mainMenuKeyboard[0][0].text.includes(text): {
        await UserController.updateUser(telegramId, {
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

      case mainMenuKeyboard[1][0].text.includes(text): {
        await UserController.updateUser(telegramId, {
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
        await UserController.updateUser(telegramId, {
          state: { state: STATES.START },
        });

        await TelegramAPI.sendMessage(chatId, {
          text: "Щось пішло не так, давай попробуєм знову",
          reply_markup: {
            keyboard: errorKeyboard,
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });
      }
    }
  } catch (e) {
    console.error(e);
  }
};

export { mainMenuHandler };
