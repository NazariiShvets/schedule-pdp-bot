import { TelegramKeyboardButton } from "../../api";
import { DAYS } from "../types";

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
