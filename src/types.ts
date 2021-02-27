type SendMessageParams = {
  chat_id: number;
  text: string;
};

type TelegramBody = {
  update_id: number;
  message: {
    message_id: number;
    from: TelegramUser;
    chat: {
      id: number;
      first_name: string;
      last_name: string;
      username: string;
      type: string;
    };
    date: number;
    text: string;
  };
};

type TelegramUser = {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  supports_inline_queries?: boolean;
};

export { SendMessageParams, TelegramBody };
