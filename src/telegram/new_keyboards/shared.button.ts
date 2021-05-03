import { TelegramInlineKeyboardButton } from "../../api";
import { Callbacks } from "../types";

const backToMainMenuButton: TelegramInlineKeyboardButton = {
  text: "Повернутись в головне меню",
  callback_data: Callbacks.mainMenu,
};

export { backToMainMenuButton };
