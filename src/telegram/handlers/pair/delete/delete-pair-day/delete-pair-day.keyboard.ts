import {
  allPairDayKeyboard,
  allPairTimeKeyboard,
  InvalidText,
} from "../../../shared";

const successText = "Ок, тепер введи час пари";
const successKeyboard = allPairTimeKeyboard;

const invalidText = InvalidText.day;
const invalidKeyboard = allPairDayKeyboard;

export { successKeyboard, successText, invalidKeyboard, invalidText };
