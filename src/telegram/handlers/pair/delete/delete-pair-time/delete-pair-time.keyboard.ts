import { createPairTextWithDay } from "../../../../../utils";
import { DAYS } from "../../../../types";
import { IPair } from "../../../../../db";
import {
  allPairTimeKeyboard,
  confirmDeletePairKeyboard,
  emptyPairListKeyboard,
  InvalidText,
} from "../../../../keyboards";

const getSuccessText = (day: DAYS, pairs: IPair[]) =>
  `${createPairTextWithDay(day, pairs)}\n\nТи дійсно хочеш її видалити?`;
const successKeyboard = confirmDeletePairKeyboard;

const emptyText = `Список пар пустий`;
const emptyKeyboard = emptyPairListKeyboard;

const invalidText = InvalidText.time;
const invalidKeyboard = allPairTimeKeyboard;

export {
  successKeyboard,
  getSuccessText,
  invalidText,
  invalidKeyboard,
  emptyKeyboard,
  emptyText,
};
