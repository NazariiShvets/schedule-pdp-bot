import { createPairTextWithDay } from "../../../../../utils";
import { Callbacks, DAYS } from "../../../../types";
import { IPair } from "../../../../../db";
import {
  allPairTimeKeyboard,
  backToMainMenuButton,
  InvalidText,
} from "../../../shared";

const confirmDeleteButton = {
  text: "Так, я хочу удалити цю пару",
  callback_data: Callbacks.deletePairConfirm,
};

const resetDeleteButton = {
  text: "Повернутись на початок",
  callback_data: Callbacks.deletePair,
};

const getSuccessText = (day: DAYS, pairs: IPair[]) =>
  `${createPairTextWithDay(day, pairs)}\n\nТи дійсно хочеш її видалити?`;
const successKeyboard = [[confirmDeleteButton], [resetDeleteButton]];

const emptyText = `Список пар пустий`;
const emptyKeyboard = [[resetDeleteButton], [backToMainMenuButton]];

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
