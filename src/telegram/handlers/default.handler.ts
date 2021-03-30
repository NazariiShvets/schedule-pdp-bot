import { TelegramAPI } from "../../api";
import { IUser, UserController } from "../../db";
import { STATES } from "../types";
import { errorKeyboard } from "../keyboards";

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
