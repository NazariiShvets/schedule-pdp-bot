enum Callbacks {
  initials = "/initial",
  mainMenu = "/main_menu",
  schedule = "/schedule",
  createPair = "/pair_create",
  deletePair = "/delete_pair",
  deletePairConfirm = "/delete_pair_confirm",
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

enum UpdatePairSteps {
  day = "update_pair_day",
  pair = "update_pair_pair",
  updateSubject = "/update_pair_subject",
  updateTeacher = "/update_pair_teacher",
  updateDay = "/update_pair_day",
  updateTime = "/update_pair_time",
}

enum DeletePairSteps {
  day = "delete_pair_day",
  pair = "delete_pair_pair",
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

export {
  PAIRS_TIME,
  DAYS,
  Callbacks,
  CreatePairSteps,
  UpdatePairSteps,
  DeletePairSteps,
};
