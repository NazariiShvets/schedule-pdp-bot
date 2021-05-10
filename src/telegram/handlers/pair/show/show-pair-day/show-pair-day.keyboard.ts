import { createPairTextWithDay } from "../../../../../utils";
import { Callbacks, DAYS } from "../../../../types";
import { backToMainMenuButton, errorKeyboard } from "../../../shared";

const backToShowScheduleMenu = {
  text: "Повернутись до меню показу розкладу",
  callback_data: Callbacks.showSchedule,
};

const showPairTodayMenuKeyboard = [
  [backToShowScheduleMenu],
  [backToMainMenuButton],
];

const getSuccessText = createPairTextWithDay;
const successKeyboard = showPairTodayMenuKeyboard;

const emptyText = (day: DAYS) => `<b><u>${day}</u></b>\n\nСписок пар пустий`;
const emptyKeyboard = errorKeyboard;

export { successKeyboard, getSuccessText, emptyText, emptyKeyboard };
