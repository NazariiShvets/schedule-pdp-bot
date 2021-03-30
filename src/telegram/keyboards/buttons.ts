import { TelegramKeyboardButton } from "../../api";

enum BUTTONS {
  CONTINUE = "Продовжити",
  BACK_TO_MAIN_MENU = "Повернутися в головне меню",
  SCHEDULE = "Розклад",
  SEND_AUTHOR_MESSAGE = "Написати відгук автору",
  SCHEDULE_TODAY = "Розклад на сьогодні",
  SCHEDULE_WEEK = "Розклад на тиждень",
  MONDAY = "Понеділок",
  THUESDAY = "Вівторок",
  WEDNESDAY = "Середа",
  THURSDAY = "Четвер",
  FRIDAY = "П'ятниця",
  PAIR_CREATE = "Добавити пару",
  PAIR_EDIT = "Редагувати пару",
  PAIR_DELETE = "Удалити пару",
  FIRST_PAIR = "Перша пара",
  SECOND_PAIR = "Друга пара",
  THIRD_PAIR = "Третя пара",
  FOURTH_PAIR = "Четверта пара",
  FIFTH_PAIR = "П'ята пара",
  SIXTH_PAIR = "Шоста пара",
  PAIR_EDIT_SUBJECT = "Редагувати назву",
  PAIR_EDIT_TEACHER = "Редагувати викладача",
  PAIR_EDIT_CLASSROOM = "Редагувати аудиторію",
}

const createButton = (
  text: BUTTONS,
  request_location = false
): TelegramKeyboardButton => ({ text, request_location });

const camelize = (text: string) =>
  text
    .toLowerCase()
    .split("_")
    .map((word, index) =>
      index > 0 ? word[0].toUpperCase() + word.substring(1) : word
    )
    .join("");

const objWithButtons = Object.entries(BUTTONS).reduce(
  (buttons, [key, text]) => ({
    ...buttons,
    [`${camelize(key)}Button`]: createButton(text),
  }),
  {} as Record<string, TelegramKeyboardButton>
);

const backToMainMenuButton = createButton(BUTTONS.BACK_TO_MAIN_MENU);
const continueButton = createButton(BUTTONS.CONTINUE);
const firstPairButton = createButton(BUTTONS.FIRST_PAIR);
const fourthPairButton = createButton(BUTTONS.FOURTH_PAIR);
const fifthPairButton = createButton(BUTTONS.FIFTH_PAIR);
const fridayButton = createButton(BUTTONS.FRIDAY);
const mondayButton = createButton(BUTTONS.MONDAY);
const pairCreateButton = createButton(BUTTONS.PAIR_CREATE);
const pairDeleteButton = createButton(BUTTONS.PAIR_DELETE);
const pairEditButton = createButton(BUTTONS.PAIR_EDIT);
const pairEditClassroomButton = createButton(BUTTONS.PAIR_EDIT_CLASSROOM);
const pairEditSubjectButton = createButton(BUTTONS.PAIR_EDIT_SUBJECT);
const pairEditTeacherButton = createButton(BUTTONS.PAIR_EDIT_TEACHER);
const scheduleButton = createButton(BUTTONS.SCHEDULE);
const scheduleTodayButton = createButton(BUTTONS.SCHEDULE_TODAY);
const scheduleWeekButton = createButton(BUTTONS.SCHEDULE_WEEK);
const secondPairButton = createButton(BUTTONS.SECOND_PAIR);
const sendAuthorMessageButton = createButton(BUTTONS.SEND_AUTHOR_MESSAGE);
const sixthPairButton = createButton(BUTTONS.SIXTH_PAIR);
const thirdPairButton = createButton(BUTTONS.THIRD_PAIR);
const thursdayButton = createButton(BUTTONS.THURSDAY);
const tuesdayButton = createButton(BUTTONS.THUESDAY);
const wednesdayButton = createButton(BUTTONS.WEDNESDAY);

export {
  BUTTONS,
  backToMainMenuButton,
  continueButton,
  fifthPairButton,
  firstPairButton,
  fourthPairButton,
  fridayButton,
  mondayButton,
  pairCreateButton,
  pairDeleteButton,
  pairEditButton,
  pairEditClassroomButton,
  pairEditSubjectButton,
  pairEditTeacherButton,
  scheduleButton,
  scheduleTodayButton,
  scheduleWeekButton,
  secondPairButton,
  sendAuthorMessageButton,
  sixthPairButton,
  thirdPairButton,
  thursdayButton,
  tuesdayButton,
  wednesdayButton,
};
