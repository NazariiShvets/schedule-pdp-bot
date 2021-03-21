import { Optional } from "sequelize";
import { STATES } from "../types";
import { TelegramAPI, TelegramUser } from "../../api";
import { UserController } from "../../db";
import { startKeyboard } from "../keyboards";

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
      await TelegramAPI.sendMessage(chatId, {
        text: "Щось пішло не так, попробуй знову",
        reply_markup: {
          one_time_keyboard: true,
          resize_keyboard: true,
          keyboard: startKeyboard,
        },
      });

      return;
    }

    await TelegramAPI.sendMessage(chatId, {
      text: `Привіт ${user.firstName}! Вітаю в боті розкладу занять. Щоб перейти до головного меню нажми кнопку ${startKeyboard[0][0].text}`,
      reply_markup: {
        one_time_keyboard: true,
        resize_keyboard: true,
        keyboard: startKeyboard,
      },
    });
  } catch (e) {
    console.error(e);

    await TelegramAPI.sendMessage(chatId, {
      text: "Щось пішло не так, попробуй знову",
      reply_markup: {
        one_time_keyboard: true,
        resize_keyboard: true,
        keyboard: startKeyboard,
      },
    });
  }
};

export { initialHandler };