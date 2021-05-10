import { createPairTextWithDay } from "../../../../../utils";
import { IPair } from "../../../../../db";
import { Callbacks, DAYS } from "../../../../types";
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
  callback_data: Callbacks.updatePairDay,
};
const updateTimeButton: TelegramInlineKeyboardButton = {
  text: Text.updateTime,
  callback_data: Callbacks.updatePairTime,
};
const updateTeacherButton: TelegramInlineKeyboardButton = {
  text: Text.updateTeacher,
  callback_data: Callbacks.updatePairTeacher,
};
const updateSubjectButton: TelegramInlineKeyboardButton = {
  text: Text.updateSubject,
  callback_data: Callbacks.updatePairSubject,
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
