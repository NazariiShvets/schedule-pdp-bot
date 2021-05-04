import { TelegramInlineKeyboardButton } from "../../../api";
import { Callbacks } from "../../types";
import { backToMainMenuButton } from "../shared.button";

const confirmDeleteButton: TelegramInlineKeyboardButton = {
  text: "Так, я хочу удалити цю пару",
  callback_data: Callbacks.deletePairConfirm,
};

const resetDeleteButton: TelegramInlineKeyboardButton = {
  text: "Повернутись на початок",
  callback_data: Callbacks.deletePair,
};

const confirmDeletePairKeyboard = [[confirmDeleteButton], [resetDeleteButton]];

const emptyPairListKeyboard = [[resetDeleteButton, backToMainMenuButton]];

export { confirmDeletePairKeyboard, emptyPairListKeyboard };
