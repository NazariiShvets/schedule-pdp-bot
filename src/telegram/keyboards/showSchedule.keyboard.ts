import { TelegramInlineKeyboardButton } from "../../api";
import { Callbacks } from "../types";
import { backToMainMenuButton } from "./shared.button";

const showScheduleTodayButton: TelegramInlineKeyboardButton = {
  text: "Подивитись розклад на сьогодні",
  callback_data: Callbacks.showScheduleToday,
};

const showScheduleWeekButton: TelegramInlineKeyboardButton = {
  text: "Подивитись розклад на тиждень",
  callback_data: Callbacks.showScheduleWeek,
};

const showScheduleDayButton: TelegramInlineKeyboardButton = {
  text: "Подивитись розклад на конкретний день",
  callback_data: Callbacks.showScheduleDay,
};

const showScheduleKeyboard = [
  [showScheduleTodayButton],
  [showScheduleWeekButton],
  [showScheduleDayButton],
  [backToMainMenuButton],
];

export { showScheduleKeyboard };
