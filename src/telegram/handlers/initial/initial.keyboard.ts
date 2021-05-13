import { errorKeyboard } from "../shared";

const getSuccessText = (userName: string) =>
  `Привіт ${userName}! Вітаю в боті розкладу занять. Щоб перейти до головного меню нажми кнопку ${errorKeyboard[0][0].text}`;

const successKeyboard = errorKeyboard;

export { successKeyboard, getSuccessText };
