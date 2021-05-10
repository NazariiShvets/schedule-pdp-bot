import { DAYS, PAIRS_TIME } from "./telegram/types";
import { IPair } from "./db";

const covertModelFromDbToIModelFromDb = <T, K>(model: T): K =>
  (model as any).dataValues as K;

const validatePair = (text: string) =>
  Object.values(PAIRS_TIME).find(
    (pair) => pair.toLowerCase() === text.toLowerCase()
  );

const validateDay = (text: string) =>
  Object.values(DAYS).find((day) => day.toLowerCase() === text.toLowerCase());

const pairTimes = {
  [PAIRS_TIME.FIRST]: `08:30 - 09:50`,
  [PAIRS_TIME.SECOND]: `10:10 - 11:30`,
  [PAIRS_TIME.THIRD]: `11:50 - 13:10`,
  [PAIRS_TIME.FOURTH]: `13:30 - 14:50`,
  [PAIRS_TIME.FIFTH]: `15:05 - 16:25`,
  [PAIRS_TIME.SIXTH]: `16:40 - 18:00`,
};

const createPairText = (pair: IPair) =>
  `<b>Час</b>: <i>${pair.time} ${
    pairTimes[pair.time]
  }</i>\n<b>Предмет</b>: <i>${pair.subject}</i>\n<b>Викладач</b>: <i>${
    pair.teacher
  }</i>\n`;

const createPairsText = (pairs: IPair[]) =>
  pairs.map(createPairText).join("\n");

const createPairTextWithDay = (day: DAYS, pairs: IPair[]) =>
  `<b><u>${day}</u></b>\n\n${createPairsText(pairs)}`;

export {
  covertModelFromDbToIModelFromDb,
  createPairsText,
  createPairText,
  createPairTextWithDay,
  validatePair,
  validateDay,
};
