type TelegramBody = {
  update_id: number;
  message?: TelegramMessage;
  callback_query?: TelegramCallbackQuery;
};

type TelegramUser = {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
};

type TelegramChat = {
  id: number;
};

type TelegramKeyboardButton = {
  text: string;
  request_location?: boolean;
};
type TelegramInlineKeyboardButton = {
  text: string;
  url?: string;
  callback_data?: string;
};

type TelegramInlineKeyboardMarkup = {
  inline_keyboard: TelegramInlineKeyboardButton[][];
};
type TelegramReplyKeyboardMarkup = {
  resize_keyboard?: boolean;
  keyboard: TelegramKeyboardButton[][];
  one_time_keyboard?: boolean;
};

type TelegramKeyboardMarkup =
  | TelegramKeyboardButton[][]
  | TelegramInlineKeyboardButton[][];

type TelegramMessage = {
  message_id: number;
  from: TelegramUser;
  chat: TelegramChat;
  date: Date;

  text?: string;
  reply_markup: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup;
};

type TelegramCallbackQuery = {
  id: string;
  from: TelegramUser;
  message?: TelegramMessage;
  data?: string;
};

export {
  TelegramBody,
  TelegramUser,
  TelegramChat,
  TelegramMessage,
  TelegramCallbackQuery,
  TelegramKeyboardButton,
  TelegramReplyKeyboardMarkup,
  TelegramInlineKeyboardButton,
  TelegramInlineKeyboardMarkup,
  TelegramKeyboardMarkup,
};
