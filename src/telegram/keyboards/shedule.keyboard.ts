import { TelegramKeyboardButton, TelegramKeyboardMarkup } from "../../api";

export const scheduleKeyboard: TelegramKeyboardMarkup = [
  [{ text: "Розклад на сьогодні" }],
  [{ text: "Розклад на тиждень" }],
];

export const scheduleWeekKeyboard: TelegramKeyboardMarkup = [
  [{ text: "Понеділок" }, { text: "Вівторок" }],
  [{ text: "Середа" }, { text: "Четвер" }],
  [{ text: "П'ятниця" }],
];

export const scheduleDayKeyboardEdit: TelegramKeyboardMarkup = [
  [{ text: "Редагувати" }],
  [{ text: "Повернутися в головне меню" }],
];

export const scheduleDayKeyboardCreate: TelegramKeyboardMarkup = [
  [{ text: "Добавити пару" }],
  [{ text: "Повернутися в головне меню" }],
];

export const schedulePairKeyboard: TelegramKeyboardButton[][] = [
  [{ text: "Перша пара" }, { text: "Друга пара" }],
  [{ text: "Третя пара" }, { text: "Четверта пара" }],
  [{ text: "П'ята пара" }, { text: "Шоста пара" }],
];

export const schedulePairEditKeyboard: TelegramKeyboardMarkup = [
  [{ text: "Редагувати назву" }, { text: "Редагувати викладача" }],
  [{ text: "Редагувати аудиторію" }],
  [{ text: "Удалити пару" }],
];

export const schedulePairEditBackKeyboard: TelegramKeyboardMarkup = [
  [{ text: "Залишити незмінним" }],
];
