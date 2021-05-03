import { Optional } from "sequelize";
import { STATES } from "../types";
import { TelegramAPI, TelegramUser } from "../../api";
import { UserController } from "../../db";
import { initialKeyboard } from "../new_keyboards";
import { defaultHandler } from "./default.handler";

const initialHandler = async (
  chatId: number,
  {
    id,
    first_name,
    last_name,
  }: Optional<
    Pick<TelegramUser, "id" | "first_name" | "last_name">,
    "last_name"
  >
) => {
  try {
    const user = await UserController.createUser({
      telegramId: id,
      firstName: first_name,
      lastName: last_name,
      state: { state: STATES.START },
    });

    if (!user) {
      await defaultHandler(chatId);

      return;
    }

    await TelegramAPI.sendMessage(chatId, {
      text: `Привіт ${user.firstName}! Вітаю в боті розкладу занять. Щоб перейти до головного меню нажми кнопку ${initialKeyboard[0][0].text}`,
      reply_markup: {
        inline_keyboard: initialKeyboard,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { initialHandler };
