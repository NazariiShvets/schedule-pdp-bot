import {
  TelegramInlineKeyboardButton,
  TelegramKeyboardMarkup,
} from "../../api";
import { Callbacks } from "./callbacks.";

const initialContinue: TelegramInlineKeyboardButton = {
  text: "Продовжити",
  callback_data: Callbacks.mainMenu,
};

const initialKeyboard: TelegramKeyboardMarkup = [[initialContinue]];

export { initialKeyboard };
