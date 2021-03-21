import { IUser, UserController } from "../../db";
import { startKeyboard } from "../keyboards";
import { TelegramAPI } from "../../api";
import { STATES } from "../types";
import { mainMenuKeyboard } from "../keyboards/main-menu.keyboard";
import { errorKeyboard } from "../keyboards/error.keyboard";
import { defaultHandler } from "./default.handler";

const startHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    switch (true) {
      case startKeyboard[0][0].text.includes(text) ||
        errorKeyboard[0][0].text.includes(text): {
        await UserController.updateUser(user.telegramId, {
          state: { state: STATES.MAIN_MENU },
        });

        await TelegramAPI.sendMessage(chatId, {
          text: "Вітаю тебе в головному меню. Вибирай опцію)",
          reply_markup: {
            keyboard: mainMenuKeyboard,
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

export { startHandler };
