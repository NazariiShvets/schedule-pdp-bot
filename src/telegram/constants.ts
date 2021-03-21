import { enumKeysToArray } from "../utils";
import { DAYS, PAIRS, STATES } from "./types";

const states = enumKeysToArray(STATES);
const days = enumKeysToArray(DAYS);
const pairs = enumKeysToArray(PAIRS);

export { states, days, pairs };
