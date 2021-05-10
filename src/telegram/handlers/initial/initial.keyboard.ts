import { backToMainMenuButton } from "../../keyboards";

const initialKeyboard = [[backToMainMenuButton]];

const getGreetingText = (userName: string) =>
  `Привіт ${userName}! Вітаю в боті розкладу занять. Щоб перейти до головного меню нажми кнопку ${initialKeyboard[0][0].text}`;

export { initialKeyboard, getGreetingText };
