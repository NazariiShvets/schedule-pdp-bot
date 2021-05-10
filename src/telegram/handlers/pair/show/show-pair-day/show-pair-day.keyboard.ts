import { backToMainMenuButton, errorKeyboard } from "../../../../keyboards";
import { createPairTextWithDay } from "../../../../../utils";
import {
  TelegramInlineKeyboardButton,
  TelegramKeyboardMarkup,
} from "../../../../../api";
import { Callbacks } from "../../../../types";

const backToShowScheduleMenu: TelegramInlineKeyboardButton = {
  text: "Повернутись до меню показу розкладу",
  callback_data: Callbacks.showSchedule,
};

const showPairTodayMenuKeyboard: TelegramKeyboardMarkup = [
  [backToShowScheduleMenu],
  [backToMainMenuButton],
];

const getSuccessText = createPairTextWithDay;
const successKeyboard = showPairTodayMenuKeyboard;

const emptyText = `Список пар пустий`;
const emptyKeyboard = errorKeyboard;

export { successKeyboard, getSuccessText, emptyText, emptyKeyboard };
