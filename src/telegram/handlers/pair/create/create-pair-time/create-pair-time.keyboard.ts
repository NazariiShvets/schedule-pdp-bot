import {
  allPairTimeKeyboard,
  backToMainMenuButton,
} from "../../../../keyboards";

const successText = "Ок, тепер введи предмет";
const successKeyboard = [[backToMainMenuButton]];

const invalidText = "Введений час невалідний. Введи валідний час";
const invalidKeyboard = allPairTimeKeyboard;

export { successKeyboard, successText, invalidText, invalidKeyboard };
