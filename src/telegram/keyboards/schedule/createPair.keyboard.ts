import { TelegramKeyboardButton } from "../../../api";
import { PAIRS_TIME } from "../../types";
import { backToMainMenuButton } from "../shared.button";
import {
  fridayButton,
  mondayButton,
  thursdayButton,
  tuesdayButton,
  wednesdayButton,
} from "./shared.keyboard";

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

const createPairDaysKeyboard = [
  [mondayButton, tuesdayButton],
  [wednesdayButton, thursdayButton],
  [fridayButton],
  [backToMainMenuButton],
];

const createPairTimeKeyboard = [
  [firstPairTimeButton, secondPairTimeButton],
  [thirdPairTimeButton, fourthPairTimeButton],
  [fifthPairTimeButton, sixthPairTimeButton],
  [backToMainMenuButton],
];

export { createPairDaysKeyboard, createPairTimeKeyboard };
