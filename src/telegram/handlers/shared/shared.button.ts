import { Callbacks, DAYS, PAIRS_TIME } from "../../types";

const backToMainMenuButton = {
  text: "Повернутись в головне меню",
  callback_data: Callbacks.mainMenu,
};

const mondayButton = { text: DAYS.MONDAY };
const tuesdayButton = { text: DAYS.TUESDAY };
const wednesdayButton = { text: DAYS.WEDNESDAY };
const thursdayButton = { text: DAYS.THURSDAY };
const fridayButton = { text: DAYS.FRIDAY };

const firstPairTimeButton = { text: PAIRS_TIME.FIRST };
const secondPairTimeButton = {
  text: PAIRS_TIME.SECOND,
};
const thirdPairTimeButton = { text: PAIRS_TIME.THIRD };
const fourthPairTimeButton = {
  text: PAIRS_TIME.FOURTH,
};
const fifthPairTimeButton = { text: PAIRS_TIME.FIFTH };
const sixthPairTimeButton = { text: PAIRS_TIME.SIXTH };

export {
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
};
