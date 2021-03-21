enum STATES {
  START = "START",
  MAIN_MENU = "MAIN_MENU",
  SCHEDULE = "SCHEDULE",
  SCHEDULE_WEEK = "SCHEDULE_WEEK",
  SCHEDULE_DAY = "SCHEDULE_DAY",
}

enum DAYS {
  MONDAY = "Понеділок",
  TUESDAY = "Вівторок",
  WEDNESDAY = "Середа",
  THURSDAY = "Четвер",
  FRIDAY = "П'ятниця",
}

const NUMENATOR_SPRING_2021 = [
  new Date(2021, 1, 15),
  new Date(2021, 2, 21),
  new Date(2021, 3, 15),
  new Date(2021, 3, 29),
  new Date(2021, 4, 12),
  new Date(2021, 4, 26),
  new Date(2021, 4, 10),
  new Date(2021, 5, 24),
];

const DENOMINATOR_SPRING_2021 = [
  new Date(2021, 2, 9),
  new Date(2021, 2, 22),
  new Date(2021, 3, 8),
  new Date(2021, 3, 22),
  new Date(2021, 4, 5),
  new Date(2021, 4, 19),
  new Date(2021, 5, 3),
  new Date(2021, 5, 17),
];

const NUMERATOR_INTERVAL = [
  {
    start: NUMENATOR_SPRING_2021[0],
    end: DENOMINATOR_SPRING_2021[0],
    isNumerator: true,
  },
  {
    start: DENOMINATOR_SPRING_2021[0],
    end: NUMENATOR_SPRING_2021[1],
    isNumerator: false,
  },
  {
    start: NUMENATOR_SPRING_2021[1],
    end: DENOMINATOR_SPRING_2021[1],
    isNumerator: true,
  },
  {
    start: DENOMINATOR_SPRING_2021[1],
    end: NUMENATOR_SPRING_2021[2],
    isNumerator: false,
  },
  {
    start: NUMENATOR_SPRING_2021[2],
    end: DENOMINATOR_SPRING_2021[2],
    isNumerator: true,
  },
  {
    start: DENOMINATOR_SPRING_2021[2],
    end: NUMENATOR_SPRING_2021[3],
    isNumerator: false,
  },
  {
    start: NUMENATOR_SPRING_2021[3],
    end: DENOMINATOR_SPRING_2021[3],
    isNumerator: true,
  },
  {
    start: DENOMINATOR_SPRING_2021[3],
    end: NUMENATOR_SPRING_2021[4],
    isNumerator: false,
  },
  {
    start: NUMENATOR_SPRING_2021[4],
    end: DENOMINATOR_SPRING_2021[4],
    isNumerator: true,
  },
  {
    start: DENOMINATOR_SPRING_2021[4],
    end: NUMENATOR_SPRING_2021[5],
    isNumerator: false,
  },
  {
    start: NUMENATOR_SPRING_2021[5],
    end: DENOMINATOR_SPRING_2021[5],
    isNumerator: true,
  },
  {
    start: DENOMINATOR_SPRING_2021[5],
    end: NUMENATOR_SPRING_2021[6],
    isNumerator: false,
  },
  {
    start: NUMENATOR_SPRING_2021[6],
    end: DENOMINATOR_SPRING_2021[6],
    isNumerator: true,
  },
  {
    start: DENOMINATOR_SPRING_2021[6],
    end: NUMENATOR_SPRING_2021[7],
    isNumerator: false,
  },
  {
    start: NUMENATOR_SPRING_2021[7],
    end: DENOMINATOR_SPRING_2021[7],
    isNumerator: true,
  },
];

export { STATES, DAYS, NUMERATOR_INTERVAL };
