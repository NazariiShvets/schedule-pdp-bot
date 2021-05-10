import {
  allPairTimeKeyboard,
  backToMainMenuButton,
  InvalidText,
} from "../../../../keyboards";

const successText = "Ок, тепер введи предмет";
const successKeyboard = [[backToMainMenuButton]];

const invalidText = InvalidText.time;
const invalidKeyboard = allPairTimeKeyboard;

export { successKeyboard, successText, invalidText, invalidKeyboard };
