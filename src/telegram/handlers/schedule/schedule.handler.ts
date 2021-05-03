import { IUser, PairController, UserController } from "../../../db";
import { TelegramAPI } from "../../../api";
import { STATES } from "../../types";
import { getCurrentDay } from "../../../utils";
import { startHandler } from "../start.handler";
import { defaultHandler } from "../default.handler";
import {
  errorKeyboard,
  pairListCreateKeyboard,
  pairListEditKeyboard,
  scheduleKeyboard,
  scheduleWeekKeyboard,
} from "../../keyboards";

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
                    `${pair.subject}: ${pair.time}, ${pair.type}, ${
                      pair.teacher
                    }, ${pair.isOnline ? pair.url : pair.classroom}\n`
                )
                .join("")
            : `Список пар пустий`,
          parse_mode: "HTML",
          reply_markup: {
            keyboard: pairs?.length
              ? pairListEditKeyboard
              : pairListCreateKeyboard,
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
            keyboard: scheduleWeekKeyboard,
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });

        return;
      }

      case errorKeyboard[0][0].text.includes(text): {
        await startHandler(chatId, user, text);

        break;
      }

      default: {
        await defaultHandler(chatId);
      }
    }
  } catch (error) {
    console.log(error);

    await defaultHandler(chatId);
  }
};

export { scheduleHandler };
