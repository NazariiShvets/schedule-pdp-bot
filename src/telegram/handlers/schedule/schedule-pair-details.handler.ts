import { IUser, PairController, UserController } from "../../../db";
import { PAIR_EDIT_ACTIONS, STATES } from "../../types";
import { schedulePairKeyboard } from "../../keyboards/shedule.keyboard";
import { errorKeyboard } from "../../keyboards/error.keyboard";
import { startHandler } from "../start.handler";
import { defaultHandler } from "../default.handler";
import { enumValuesToArray } from "../../../utils";
import { TelegramAPI } from "../../../api";

const scheduleDayEditPairDetailsHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    switch (true) {
      case enumValuesToArray(PAIR_EDIT_ACTIONS).includes(
        user.state.pairEditAction
      ): {
        const pair = await PairController.getPair({
          day: user.state.day,
          time: user.state.pair,
        });

        if (pair) {
          await PairController.updatePair(pair.id, {
            [user.state.pairEditAction!.toLowerCase()]: text,
          });

          await UserController.updateUser(user.telegramId, {
            state: {
              state: STATES.SCHEDULE_DAY_EDIT,
              day: user.state.day,
            },
          });

          await TelegramAPI.sendMessage(chatId, {
            text: "",
            reply_markup: {
              keyboard: schedulePairKeyboard,
              one_time_keyboard: true,
              resize_keyboard: true,
            },
          });

          return;
        }

        await defaultHandler(chatId, user);

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

export { scheduleDayEditPairDetailsHandler };
