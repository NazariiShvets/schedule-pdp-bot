enum Callbacks {
  mainMenu = "/main_menu",
  schedule = "/schedule",
  createPair = "/pair_create",
  deletePair = "/delete_pair",
  updatePair = "/update_pair",
  showSchedule = "/schedule_show",
  showScheduleDay = "/schedule_day",
  showScheduleToday = "/schedule_today",
  showScheduleWeek = "/schedule_week",
}

enum CreatePairSteps {
  day = "create_pair_day",
  pair = "create_pair_pair",
  subject = "create_pair_subject",
  teacher = "create_pair_teacher",
}

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

export {
  STATES,
  PAIRS_TIME,
  PAIR_EDIT_ACTIONS,
  DAYS,
  Callbacks,
  CreatePairSteps,
};
