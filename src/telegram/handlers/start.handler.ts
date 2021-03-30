import { IUser, UserController } from "../../db";
import { TelegramAPI } from "../../api";
import { STATES } from "../types";
import { defaultHandler } from "./default.handler";
import { errorKeyboard, initialKeyboard, mainKeyboard } from "../keyboards";

const startHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    switch (true) {
      case initialKeyboard[0][0].text.includes(text) ||
        errorKeyboard[0][0].text.includes(text): {
        await UserController.updateUser(user.telegramId, {
          state: { state: STATES.MAIN_MENU },
        });

        await TelegramAPI.sendMessage(chatId, {
          text: "Вітаю тебе в головному меню. Вибирай опцію)",
          reply_markup: {
            keyboard: mainKeyboard,
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
