import { enumKeysToArray } from "../utils";
import { DAYS, PAIRS_TIME, STATES } from "./types";

const states = enumKeysToArray(STATES);
const days = enumKeysToArray(DAYS);
const pairs = enumKeysToArray(PAIRS_TIME);

export { states, days, pairs };
