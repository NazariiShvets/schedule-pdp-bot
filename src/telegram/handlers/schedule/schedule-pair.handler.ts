import { IUser, PairController, UserController } from "../../../db";
import { PAIR_EDIT_ACTIONS, STATES, pairActionsToMessage } from "../../types";
import { schedulePairKeyboard } from "../../keyboards/shedule.keyboard";
import { errorKeyboard } from "../../keyboards/error.keyboard";
import { startHandler } from "../start.handler";
import { defaultHandler } from "../default.handler";
import { TelegramAPI } from "../../../api";
import { enumValuesToArray } from "../../../utils";

const scheduleDayEditPairHandler = async (
  chatId: number,
  user: IUser,
  text = ""
) => {
  try {
    switch (true) {
      case enumValuesToArray(PAIR_EDIT_ACTIONS).includes(text): {
        await UserController.updateUser(user.telegramId, {
          state: {
            ...user.state,
            state: STATES.SCHEDULE_DAY_EDIT_PAIR_DETAILS,
            pairEditAction: enumValuesToArray(PAIR_EDIT_ACTIONS).find(
              (action) => action === text
            ),
          },
        });

        if (text === PAIR_EDIT_ACTIONS.DELETE) {
          await PairController.deletePair({
            day: user.state.day,
            time: user.state.pair,
          });

          await UserController.updateUser(user.telegramId, {
            state: {
              state: STATES.SCHEDULE_DAY_EDIT,
              day: user.state.day,
            },
          });

          await TelegramAPI.sendMessage(chatId, {
            text: pairActionsToMessage[text],
            reply_markup: {
              keyboard: schedulePairKeyboard,
              one_time_keyboard: true,
              resize_keyboard: true,
            },
          });

          return;
        }

        await TelegramAPI.sendMessage(chatId, {
          text: pairActionsToMessage[text as PAIR_EDIT_ACTIONS],
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

export { scheduleDayEditPairHandler };
