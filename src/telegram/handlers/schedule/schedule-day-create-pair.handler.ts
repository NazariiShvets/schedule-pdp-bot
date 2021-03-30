import { IUser, PairController, UserController } from "../../../db";
import { TelegramAPI } from "../../../api";
import { DAYS, STATES } from "../../types";
import { startHandler } from "../start.handler";
import { defaultHandler } from "../default.handler";
import {
  errorKeyboard,
  pairListCreateKeyboard,
  pairListEditKeyboard,
  scheduleWeekKeyboard,
} from "../../keyboards";

const scheduleDayCreatePair = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    switch (true) {
      case scheduleWeekKeyboard.some((daysKeyboard) =>
        daysKeyboard.some((day) => day.text.includes(text))
      ): {
        await UserController.updateUser(user.telegramId, {
          state: {
            state: STATES.SCHEDULE_DAY,
            day: text as DAYS,
          },
        });

        const pairs = await PairController.getAllPairs({
          user_id: user.id,
          day: text as DAYS,
        });

        if (!pairs?.length) {
          await TelegramAPI.sendMessage(chatId, {
            text: `Список пар пустий`,
            reply_markup: {
              keyboard: pairListCreateKeyboard,
              one_time_keyboard: true,
              resize_keyboard: true,
            },
          });

          break;
        }

        await TelegramAPI.sendMessage(chatId, {
          text: pairs
            .map(
              (pair) =>
                `${pair.subject}: ${pair.time}, ${pair.type}, ${
                  pair.teacher
                }, ${pair.isOnline ? pair.url : pair.classroom}`
            )
            .join("\n"),
          parse_mode: "HTML",
          reply_markup: {
            keyboard: pairListEditKeyboard,
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
        await defaultHandler(chatId, user);
      }
    }
  } catch (error) {
    console.log(error);

    await defaultHandler(chatId, user);
  }
};

export { scheduleDayCreatePair };
