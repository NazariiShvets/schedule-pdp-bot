import { UserController } from "../../../db";
import { TelegramAPI, TelegramUser } from "../../../api";
import { Callbacks } from "../../types";
import { errorHandler } from "../error";
import { successKeyboard, getSuccessText } from "./initial.keyboard";

const initialHandler = async (
  chatId: number,
  {
    id,
    first_name,
    last_name,
  }: Partial<TelegramUser> & Pick<TelegramUser, "id" | "first_name">
) => {
  try {
    const user = await UserController.createUser({
      telegramId: id,
      firstName: first_name,
      lastName: last_name,
      state: { state: Callbacks.initials },
    });

    if (!user) {
      await errorHandler(chatId);

      return;
    }

    await TelegramAPI.sendMessage(chatId, {
      text: getSuccessText(user.firstName),
      reply_markup: {
        inline_keyboard: successKeyboard,
      },
    });
  } catch (error) {
    console.error(error);
    await errorHandler(chatId);
  }
};

export { initialHandler };
