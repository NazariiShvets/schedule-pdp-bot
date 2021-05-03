import { TelegramInlineKeyboardButton } from "../../api";
import { Callbacks } from "./callbacks.";

const backToMainMenuButton: TelegramInlineKeyboardButton = {
  text: "Повернутись в головне меню",
  callback_data: Callbacks.mainMenu,
};

export { backToMainMenuButton };
