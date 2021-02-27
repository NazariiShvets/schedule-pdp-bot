import axios, { AxiosError } from "axios";
import { SendMessageParams } from "./types";

const TOKEN = process.env.TELEGRAM_TOKEN;
const baseUrl = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const sendMessage = (params: SendMessageParams) =>
  axios.get(baseUrl, { params }).catch((error: AxiosError) => {
    console.error("Telegram error", error?.response?.data);
  });

export const telegram = { sendMessage };
