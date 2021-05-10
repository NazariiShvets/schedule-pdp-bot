import {
  allPairDayKeyboard,
  errorKeyboard,
  InvalidText,
} from "../../../../keyboards";

const successText = "Ок, тепер введи час пари";
const successKeyboard = errorKeyboard;

const invalidText = InvalidText.day;
const invalidKeyboard = allPairDayKeyboard;

export { successKeyboard, successText, invalidKeyboard, invalidText };
