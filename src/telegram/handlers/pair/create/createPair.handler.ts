import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { createPairDaysKeyboard } from "../../../new_keyboards";

const createPairHandler = async (chatId: number) => {
  try {
    await TelegramAPI.sendMessage(chatId, {
      text: "Ок, давай виберем день в який буде проходити пара)",
      reply_markup: {
        keyboard: createPairDaysKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { createPairHandler };
