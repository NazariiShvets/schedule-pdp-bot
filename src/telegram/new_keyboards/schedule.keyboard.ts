import {
  TelegramInlineKeyboardButton,
  TelegramKeyboardMarkup,
} from "../../api";
import { Callbacks } from "../types";

const showScheduleButton: TelegramInlineKeyboardButton = {
  text: "Подивитись розклад",
  callback_data: Callbacks.showSchedule,
};

const createPairButton: TelegramInlineKeyboardButton = {
  text: "Створити нову пару",
  callback_data: Callbacks.createPair,
};

const updatePairButton: TelegramInlineKeyboardButton = {
  text: "Редагувати пару",
  callback_data: Callbacks.updatePair,
};

const delelePairButton: TelegramInlineKeyboardButton = {
  text: "Видалити пару",
  callback_data: Callbacks.deletePair,
};

const scheduleKeyboard: TelegramKeyboardMarkup = [
  [showScheduleButton],
  [createPairButton, updatePairButton, delelePairButton],
];

export { scheduleKeyboard };
