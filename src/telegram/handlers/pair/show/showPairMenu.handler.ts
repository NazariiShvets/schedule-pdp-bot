import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { showScheduleKeyboard } from "../../../keyboards";

const showPairMenuHandler = async (chatId: number) => {
  try {
    await TelegramAPI.sendMessage(chatId, {
      text: "Вибери який розклад хочеш побачити)",
      reply_markup: {
        inline_keyboard: showScheduleKeyboard,
      },
    });
  } catch (error) {
    await defaultHandler(chatId);
  }
};

export { showPairMenuHandler };
