enum STATES {
  START = "START",
  MAIN_MENU = "MAIN_MENU",
  SCHEDULE = "SCHEDULE",
  SCHEDULE_WEEK = "SCHEDULE_WEEK",
  SCHEDULE_DAY = "SCHEDULE_DAY",
  SCHEDULE_DAY_EDIT = "SCHEDULE_DAY_EDIT",
  SCHEDULE_DAY_CREATE = "SCHEDULE_DAY_CREATE",
}

enum DAYS {
  MONDAY = "Понеділок",
  TUESDAY = "Вівторок",
  WEDNESDAY = "Середа",
  THURSDAY = "Четвер",
  FRIDAY = "П'ятниця",
}

enum PAIRS_TIME {
  FIRST = "Перша пара",
  SECOND = "Друга пара",
  THIRD = "Третя пара",
  FOURTH = "Четверта пара",
  FIFTH = "П'ята пара",
  SIXTH = "Шоста пара",
}

enum PAIR_EDIT_ACTIONS {
  NAME = "Редагувати назву",
  TEACHER = "Редагувати викладача",
  CLASSROOM = "Редагувати аудиторію",
  DELETE = "Удалити пару",
}

export { STATES, DAYS, PAIRS_TIME, PAIR_EDIT_ACTIONS };
