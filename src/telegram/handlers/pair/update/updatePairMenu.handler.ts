import { TelegramAPI } from "../../../../api";
import { updatePairDayMenuKeyboard } from "../../../keyboards";
import { UserController } from "../../../../db";
import { UpdatePairSteps } from "../../../types";
import { errorHandler } from "../../error";

const updatePairMenuHandler = async (chatId: number) => {
  try {
    await UserController.updateUser(chatId, {
      state: { state: UpdatePairSteps.day },
    });

    await TelegramAPI.sendMessage(chatId, {
      text: "Ок, давай виберем день в який проходить пара пара)",
      reply_markup: {
        keyboard: updatePairDayMenuKeyboard,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } catch (error) {
    await errorHandler(chatId);
  }
};

export { updatePairMenuHandler };
