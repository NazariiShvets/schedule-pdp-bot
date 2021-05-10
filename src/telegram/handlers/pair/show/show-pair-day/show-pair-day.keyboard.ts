import {
  errorKeyboard,
  showPairTodayMenuKeyboard,
} from "../../../../keyboards";
import { createPairTextWithDay } from "../../../../../utils";

const getSuccessText = createPairTextWithDay;
const successKeyboard = showPairTodayMenuKeyboard;

const emptyText = `Список пар пустий`;
const emptyKeyboard = errorKeyboard;

export { successKeyboard, getSuccessText, emptyText, emptyKeyboard };
