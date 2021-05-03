import { TelegramKeyboardButton } from "../../api";

enum DAYS {
  MONDAY = "Понеділок",
  TUESDAY = "Вівторок",
  WEDNESDAY = "Середа",
  THURSDAY = "Четвер",
  FRIDAY = "П'ятниця",
}

const mondayButton: TelegramKeyboardButton = { text: DAYS.MONDAY };
const tuesdayButton: TelegramKeyboardButton = { text: DAYS.TUESDAY };
const wednesdayButton: TelegramKeyboardButton = { text: DAYS.WEDNESDAY };
const thursdayButton: TelegramKeyboardButton = { text: DAYS.THURSDAY };
const fridayButton: TelegramKeyboardButton = { text: DAYS.FRIDAY };

const createPairDaysKeyboard = [
  [mondayButton, tuesdayButton],
  [wednesdayButton, thursdayButton],
  [fridayButton],
];

export { createPairDaysKeyboard };
