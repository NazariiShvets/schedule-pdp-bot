import {
  allPairDayKeyboard,
  allPairTimeKeyboard,
  InvalidText,
} from "../../../../keyboards";

const invalidText = InvalidText.day;
const invalidKeyboard = allPairDayKeyboard;

const successText = "Ок, тепер введи час пари";
const successKeyboard = allPairTimeKeyboard;

export { invalidKeyboard, successKeyboard, successText, invalidText };
