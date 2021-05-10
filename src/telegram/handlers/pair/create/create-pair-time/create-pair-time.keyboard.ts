import {
  allPairTimeKeyboard,
  errorKeyboard,
  InvalidText,
} from "../../../shared";

const successText = "Ок, тепер введи предмет";
const successKeyboard = errorKeyboard;

const invalidText = InvalidText.time;
const invalidKeyboard = allPairTimeKeyboard;

export { successKeyboard, successText, invalidText, invalidKeyboard };
