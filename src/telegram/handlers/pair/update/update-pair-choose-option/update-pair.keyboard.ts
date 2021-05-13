import {
  allPairDayKeyboard,
  allPairTimeKeyboard,
  errorKeyboard,
} from "../../../shared";

const successDayText = "Вибери новий день";
const successDayKeyboard = allPairDayKeyboard;

const successTimeText = "Вибери новий час";
const successTimeKeyboard = allPairTimeKeyboard;

const successSubjectText = "Вибери новий предмет";
const successSubjectKeyboard = errorKeyboard;

const successTeacherText = "Вибери нового викладача";
const successTeacherKeyboard = errorKeyboard;

export {
  successSubjectKeyboard,
  successTeacherKeyboard,
  successTimeKeyboard,
  successDayKeyboard,
  successDayText,
  successSubjectText,
  successTeacherText,
  successTimeText,
};
