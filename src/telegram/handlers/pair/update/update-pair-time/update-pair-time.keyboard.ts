import { allPairTimeKeyboard, InvalidText } from "../../../../keyboards";
import { errorKeyboard } from "../../../error/error.keyboard";
import { createPairTextWithDay } from "../../../../../utils";
import { IPair } from "../../../../../db";
import { DAYS } from "../../../../types";

const getSuccessText = (day: DAYS, pairs: IPair[]) =>
  `${createPairTextWithDay(day, pairs)}\n\nЩо ти хочеш в ній змінити?`;
const successKeyboard = errorKeyboard;

const emptyText = `Список пар пустий`;
const emptyKeyboard = errorKeyboard;

const invalidText = InvalidText.time;
const invalidKeyboard = allPairTimeKeyboard;

export {
  successKeyboard,
  getSuccessText,
  invalidText,
  invalidKeyboard,
  emptyText,
  emptyKeyboard,
};
