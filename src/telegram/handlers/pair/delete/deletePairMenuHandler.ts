import { defaultHandler } from "../../default.handler";
import { TelegramAPI } from "../../../../api";
import { createPairDaysKeyboard } from "../../../keyboards";
import { UserController } from "../../../../db";
import { DeletePairSteps } from "../../../types";

const deletePairMenuHandler = async (chatId: number) => {
  try {
    await UserController.updateUser(chatId, {
      state: { state: DeletePairSteps.day },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: "Ок, давай виберем день в який проходить пара пара)",
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

export { deletePairMenuHandler };
