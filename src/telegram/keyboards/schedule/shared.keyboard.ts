import { TelegramKeyboardButton } from "../../../api";
import { DAYS, PAIRS_TIME } from "../../types";
import { backToMainMenuButton } from "../shared.button";

const mondayButton: TelegramKeyboardButton = { text: DAYS.MONDAY };
const tuesdayButton: TelegramKeyboardButton = { text: DAYS.TUESDAY };
const wednesdayButton: TelegramKeyboardButton = { text: DAYS.WEDNESDAY };
const thursdayButton: TelegramKeyboardButton = { text: DAYS.THURSDAY };
const fridayButton: TelegramKeyboardButton = { text: DAYS.FRIDAY };

const firstPairTimeButton: TelegramKeyboardButton = { text: PAIRS_TIME.FIRST };
const secondPairTimeButton: TelegramKeyboardButton = {
  text: PAIRS_TIME.SECOND,
};
const thirdPairTimeButton: TelegramKeyboardButton = { text: PAIRS_TIME.THIRD };
const fourthPairTimeButton: TelegramKeyboardButton = {
  text: PAIRS_TIME.FOURTH,
};
const fifthPairTimeButton: TelegramKeyboardButton = { text: PAIRS_TIME.FIFTH };
const sixthPairTimeButton: TelegramKeyboardButton = { text: PAIRS_TIME.SIXTH };

const allPairDayKeyboard = [
  [mondayButton, tuesdayButton],
  [wednesdayButton, thursdayButton],
  [fridayButton],
  [backToMainMenuButton],
];

const allPairTimeKeyboard = [
  [firstPairTimeButton, secondPairTimeButton],
  [thirdPairTimeButton, fourthPairTimeButton],
  [fifthPairTimeButton, sixthPairTimeButton],
  [backToMainMenuButton],
];

export {
  thursdayButton,
  wednesdayButton,
  tuesdayButton,
  mondayButton,
  fridayButton,
  firstPairTimeButton,
  secondPairTimeButton,
  thirdPairTimeButton,
  fourthPairTimeButton,
  fifthPairTimeButton,
  sixthPairTimeButton,
  allPairDayKeyboard,
  allPairTimeKeyboard,
};
