import { backToMainMenuButton } from "../../../../keyboards";
import { TelegramInlineKeyboardButton } from "../../../../../api";
import { Callbacks } from "../../../../types";

const backToShowScheduleMenu: TelegramInlineKeyboardButton = {
  text: "Повернутись до меню показу розкладу",
  callback_data: Callbacks.showSchedule,
};

const successText = "Хочеш повернутись назад?";
const successKeyboard = [[backToShowScheduleMenu], [backToMainMenuButton]];

export { successKeyboard, successText };
