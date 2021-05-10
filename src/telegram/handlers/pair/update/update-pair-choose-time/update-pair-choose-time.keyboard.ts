import { createPairTextWithDay } from "../../../../../utils";
import { IPair } from "../../../../../db";
import { DAYS, UpdatePairSteps } from "../../../../types";
import {
  allPairTimeKeyboard,
  errorKeyboard,
  InvalidText,
} from "../../../shared";
import { TelegramInlineKeyboardButton } from "../../../../../api";

enum Text {
  updateDay = "Змінити день",
  updateTime = "Змінити час",
  updateSubject = "Змінити предмет",
  updateTeacher = "Змінити викладача",
}

const updateDayButton: TelegramInlineKeyboardButton = {
  text: Text.updateDay,
  callback_data: UpdatePairSteps.updateDay,
};
const updateTimeButton: TelegramInlineKeyboardButton = {
  text: Text.updateTime,
  callback_data: UpdatePairSteps.updateTime,
};
const updateTeacherButton: TelegramInlineKeyboardButton = {
  text: Text.updateTeacher,
  callback_data: UpdatePairSteps.updateTeacher,
};
const updateSubjectButton: TelegramInlineKeyboardButton = {
  text: Text.updateSubject,
  callback_data: UpdatePairSteps.updateSubject,
};

const getSuccessText = (day: DAYS, pairs: IPair[]) =>
  `${createPairTextWithDay(day, pairs)}\n\nЩо ти хочеш в ній змінити?`;
const successKeyboard = [
  [updateDayButton, updateTimeButton],
  [updateTeacherButton, updateSubjectButton],
];

const emptyText = `Список пар пустий`;
const emptyKeyboard = errorKeyboard;

const invalidText = InvalidText.time;
const invalidKeyboard = allPairTimeKeyboard;

export {
  successKeyboard,
  getSuccessText,
  invalidText,
  invalidKeyboard,
  emptyText,
  emptyKeyboard,
};
