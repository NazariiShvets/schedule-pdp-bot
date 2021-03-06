import {
  TelegramInlineKeyboardMarkup,
  TelegramReplyKeyboardMarkup,
} from "./telegram.core.model";

type SendMessageRequest = {
  chat_id: number;
  text: string;
  parse_mode?: string;
  entities?: any[];
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?: TelegramInlineKeyboardMarkup | TelegramReplyKeyboardMarkup;
};

export { SendMessageRequest };
