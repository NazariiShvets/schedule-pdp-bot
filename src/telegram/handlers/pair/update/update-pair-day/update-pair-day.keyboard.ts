import {
  allPairDayKeyboard,
  allPairTimeKeyboard,
  InvalidText,
} from "../../../../keyboards";

const successText = "Ок, тепер введи час пари";
const successKeyboard = allPairTimeKeyboard;

const invalidText = InvalidText.day;
const invalidKeyboard = allPairDayKeyboard;

export { invalidKeyboard, successKeyboard, successText, invalidText };
