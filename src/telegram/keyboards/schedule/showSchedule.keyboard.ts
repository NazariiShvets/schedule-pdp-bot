import { TelegramInlineKeyboardButton } from "../../../api";
import { Callbacks } from "../../types";
import { backToMainMenuButton } from "../shared.button";

const showScheduleTodayButton: TelegramInlineKeyboardButton = {
  text: "На сьогодні",
  callback_data: Callbacks.showScheduleToday,
};

const showScheduleDayButton: TelegramInlineKeyboardButton = {
  text: "На конкретний день",
  callback_data: Callbacks.showScheduleDay,
};

const showScheduleWeekButton: TelegramInlineKeyboardButton = {
  text: "На тиждень",
  callback_data: Callbacks.showScheduleWeek,
};

const showScheduleKeyboard = [
  [showScheduleTodayButton, showScheduleDayButton],
  [showScheduleWeekButton],
  [backToMainMenuButton],
];

export { showScheduleKeyboard };
