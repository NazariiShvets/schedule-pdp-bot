import { TelegramKeyboardButton } from "../../../api";
import { DAYS } from "../../types";

const mondayButton: TelegramKeyboardButton = { text: DAYS.MONDAY };
const tuesdayButton: TelegramKeyboardButton = { text: DAYS.TUESDAY };
const wednesdayButton: TelegramKeyboardButton = { text: DAYS.WEDNESDAY };
const thursdayButton: TelegramKeyboardButton = { text: DAYS.THURSDAY };
const fridayButton: TelegramKeyboardButton = { text: DAYS.FRIDAY };

export {
  thursdayButton,
  wednesdayButton,
  tuesdayButton,
  mondayButton,
  fridayButton,
};
