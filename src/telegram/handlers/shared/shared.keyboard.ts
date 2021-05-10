import {
  backToMainMenuButton,
  sixthPairTimeButton,
  fifthPairTimeButton,
  fourthPairTimeButton,
  thirdPairTimeButton,
  secondPairTimeButton,
  firstPairTimeButton,
  mondayButton,
  tuesdayButton,
  wednesdayButton,
  thursdayButton,
  fridayButton,
} from "./shared.button";

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

const errorKeyboard = [[backToMainMenuButton]];

export { allPairDayKeyboard, allPairTimeKeyboard, errorKeyboard };
