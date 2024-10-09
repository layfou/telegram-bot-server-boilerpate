import dotenv from 'dotenv';
dotenv.config();

const {TOKEN, SERVER_URL} = process.env;
export const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
export const URI = `/webhook/${TOKEN}`;
const WEBHOOK_URL = SERVER_URL + URI;

export function setWebhook() {
  fetch(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
    .then(res => res.json())
    .then(data => console.log(data))
}