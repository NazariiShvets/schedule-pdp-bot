import {
  backToMainMenuButton,
  continueButton,
  fifthPairButton,
  firstPairButton,
  fourthPairButton,
  fridayButton,
  mondayButton,
  pairCreateButton,
  pairDeleteButton,
  pairEditButton,
  pairEditClassroomButton,
  pairEditSubjectButton,
  pairEditTeacherButton,
  scheduleButton,
  scheduleTodayButton,
  scheduleWeekButton,
  secondPairButton,
  sendAuthorMessageButton,
  sixthPairButton,
  thirdPairButton,
  thursdayButton,
  tuesdayButton,
  wednesdayButton,
} from "./buttons";

const initialKeyboard = [[continueButton]];

const errorKeyboard = [[backToMainMenuButton]];

const mainKeyboard = [[scheduleButton], [sendAuthorMessageButton]];

const scheduleKeyboard = [[scheduleTodayButton], [scheduleWeekButton]];

const scheduleWeekKeyboard = [
  [mondayButton, tuesdayButton],
  [wednesdayButton, thursdayButton],
  [fridayButton],
];

const schedulePairKeyboard = [
  [firstPairButton, secondPairButton],
  [thirdPairButton, fourthPairButton],
  [fifthPairButton, sixthPairButton],
];

const pairListCreateKeyboard = [[pairCreateButton], [backToMainMenuButton]];
const pairListEditKeyboard = [[pairEditButton], [backToMainMenuButton]];

const editPairListKeyboard = [
  [pairEditSubjectButton, pairEditTeacherButton],
  [pairEditClassroomButton],
  [pairDeleteButton],
];

const deletePairKeyboard = [[backToMainMenuButton]];
const createPairKeyboard = [[backToMainMenuButton]];

export {
  initialKeyboard,
  errorKeyboard,
  mainKeyboard,
  scheduleKeyboard,
  scheduleWeekKeyboard,
  schedulePairKeyboard,
  pairListCreateKeyboard,
  pairListEditKeyboard,
  editPairListKeyboard,
  deletePairKeyboard,
  createPairKeyboard,
};
