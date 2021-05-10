import {
  allPairDayKeyboard,
  allPairTimeKeyboard,
  errorKeyboard,
  InvalidText,
} from "../../../shared";

const successText = "Успіх!";
const successKeyboard = errorKeyboard;

const invalidDayText = InvalidText.day;
const invalidDayKeyboard = allPairDayKeyboard;

const invalidPairTimeText = InvalidText.time;
const invalidPairTimeKeyboard = allPairTimeKeyboard;

export {
  invalidDayKeyboard,
  successKeyboard,
  successText,
  invalidDayText,
  invalidPairTimeText,
  invalidPairTimeKeyboard,
};
