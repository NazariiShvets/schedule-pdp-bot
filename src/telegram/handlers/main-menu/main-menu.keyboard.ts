import { Callbacks } from "../../types";

enum Text {
  showSchedule = "Подивитись розклад",
  createPair = "Створити нову пару",
  updatePair = "Редагувати пару",
  deletePair = "Видалити пару",
}

const showScheduleButton = {
  text: Text.showSchedule,
  callback_data: Callbacks.showSchedule,
};

const createPairButton = {
  text: Text.createPair,
  callback_data: Callbacks.createPair,
};

const updatePairButton = {
  text: Text.updatePair,
  callback_data: Callbacks.updatePair,
};

const deletePairButton = {
  text: Text.deletePair,
  callback_data: Callbacks.deletePair,
};

const mainMenuText = "Ти в головному меню. Вибирай";

const mainMenuKeyboard = [
  [showScheduleButton],
  [createPairButton, updatePairButton, deletePairButton],
];

export { mainMenuKeyboard, mainMenuText };
