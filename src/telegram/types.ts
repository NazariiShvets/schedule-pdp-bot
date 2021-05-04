enum Callbacks {
  initials = "/initial",
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

export { PAIRS_TIME, DAYS, Callbacks, CreatePairSteps };
