import { Callbacks } from "../../../../types";
import { backToMainMenuButton } from "../../../shared";

const backToShowScheduleMenu = {
  text: "Повернутись до меню показу розкладу",
  callback_data: Callbacks.showSchedule,
};

const successText = "Хочеш повернутись назад?";
const successKeyboard = [[backToShowScheduleMenu], [backToMainMenuButton]];

export { successKeyboard, successText };
