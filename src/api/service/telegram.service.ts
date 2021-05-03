import axios, { AxiosError } from "axios";
import { SendMessageRequest } from "../models/telegram.model";

const TOKEN = process.env.TELEGRAM_TOKEN;
const baseUrl = `https://api.telegram.org/bot${TOKEN}`;

class TelegramAPI {
  static sendMessage = async (
    chat_id: number,
    params: Partial<Omit<SendMessageRequest, "chat_id">>
  ) =>
    axios
      .post(`${baseUrl}/sendMessage`, {
        chat_id,
        ...params,
      })
      .catch((error: AxiosError) => {
        console.error("TelegramError", error?.response?.data);
      });

  static deleteMessage = async (chat_id: number, message_id: number) =>
    axios
      .post(`${baseUrl}/deleteMessage`, {
        chat_id,
        message_id,
      })
      .catch((error: AxiosError) => {
        console.error("TelegramError", error?.response?.data);
      });
}

export { TelegramAPI };
