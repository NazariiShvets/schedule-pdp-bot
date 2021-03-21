import { TelegramAPI } from "../../api";
import { errorKeyboard } from "../keyboards/error.keyboard";
import { IUser, UserController } from "../../db";
import { STATES } from "../types";

const defaultHandler = async (
  chatId: number,
  { telegramId }: Pick<IUser, "telegramId">
) => {
  await UserController.updateUser(telegramId, {
    state: { state: STATES.START },
  });

  await TelegramAPI.sendMessage(chatId, {
    text: "Щось пішло не так",
    reply_markup: {
      keyboard: errorKeyboard,
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  });
};

export { defaultHandler };
