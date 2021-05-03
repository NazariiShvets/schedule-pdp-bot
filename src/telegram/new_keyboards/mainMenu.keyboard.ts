import {
  TelegramInlineKeyboardButton,
  TelegramKeyboardMarkup,
} from "../../api";
import { Callbacks } from "./callbacks.";

const mainMenuScheduleButton: TelegramInlineKeyboardButton = {
  text: "Розклад",
  callback_data: Callbacks.schedule,
};

const mainMenuKeyboard: TelegramKeyboardMarkup = [[mainMenuScheduleButton]];

export { mainMenuKeyboard };
