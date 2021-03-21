import { IUser, PairController, UserController } from "../../../db";
import { TelegramAPI } from "../../../api";
import { STATES } from "../../types";
import {
  scheduleKeyboard,
  scheduleWeekKeyboard,
} from "../../keyboards/shedule.keyboard";
import { errorKeyboard } from "../../keyboards/error.keyboard";
import { getCurrentDay } from "../../../utils";

const scheduleHandler = async (chatId: number, user: IUser, text = "") => {
  try {
    switch (true) {
      case scheduleKeyboard[0][0].text.includes(text): {
        const day = getCurrentDay();

        await UserController.updateUser(user.telegramId, {
          state: {
            state: STATES.SCHEDULE_DAY,
            day,
          },
        });

        const pairs = await PairController.getAllPairs({
          user_id: user.id,
          day,
        });

        await TelegramAPI.sendMessage(chatId, {
          text: pairs?.length
            ? pairs
                .map(
                  (pair) =>
                    `${pair.subject}: ${pair.from}-${pair.to}, ${pair.type}, ${
                      pair.teacher
                    }, ${pair.isOnline ? pair.url : pair.classroom}\n`
                )
                .join("")
            : `Список пар пустий`,
          parse_mode: "HTML",
          reply_markup: {
            keyboard: [[{ text: "Редагувати" }], ...errorKeyboard],
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });

        return;
      }

      case scheduleKeyboard[1][0].text.includes(text): {
        await UserController.updateUser(user.telegramId, {
          state: { state: STATES.SCHEDULE_WEEK },
        });
        await TelegramAPI.sendMessage(chatId, {
          text: "Вибери день",

          reply_markup: {
            inline_keyboard: scheduleWeekKeyboard,
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });
        return;
      }
      default: {
        await UserController.updateUser(user.telegramId, {
          state: { state: STATES.START },
        });

        await TelegramAPI.sendMessage(chatId, {
          text: "Щось пішло не так, повернемось в головне меню",
          reply_markup: {
            keyboard: errorKeyboard,
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });
      }
    }
  } catch (e) {
    console.log(e);
    await UserController.updateUser(user.telegramId, {
      state: { state: STATES.START },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: "Щось пішло не так, повернемось в головне меню",
      reply_markup: {
        keyboard: errorKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  }
};

export { scheduleHandler };
