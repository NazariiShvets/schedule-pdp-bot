enum STATES {
  START = "START",
  MAIN_MENU = "MAIN_MENU",
  SCHEDULE = "SCHEDULE",
  SCHEDULE_WEEK = "SCHEDULE_WEEK",
  SCHEDULE_DAY = "SCHEDULE_DAY",
  SCHEDULE_DAY_EDIT = "SCHEDULE_DAY_EDIT",
}

enum DAYS {
  MONDAY = "Понеділок",
  TUESDAY = "Вівторок",
  WEDNESDAY = "Середа",
  THURSDAY = "Четвер",
  FRIDAY = "П'ятниця",
}

enum PAIRS {
  FIRST = "Перша пара",
  SECOND = "Друга пара",
  THIRD = "Третя пара",
  FOURTH = "Четверта пара",
  FIFTH = "П'ята пара",
  SIXTH = "Шоста пара",
}

export { STATES, DAYS, PAIRS };
