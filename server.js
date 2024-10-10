import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import {setWebhook, URI, TELEGRAM_API} from "./telegram.js"

dotenv.config()
const {PORT, SERVER_URL, TOKEN} = process.env;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  const response = {
    "port": PORT,
    "server": SERVER_URL
  }
  
  res.send(response)
})

app.post('/', (req, res) => {
  res.send('hello, post!!!')
})

app.post(URI, (req, res) => {
  const {id, first_name, username} = req.body.message.chat;
  const {text} = req.body.message;

  console.log(text)

  axios.post(`${TELEGRAM_API}/sendMessage`, {
    chat_id: id,
    text: text
  });

  return res.send();
})

app.listen(PORT, () => {
  setWebhook()
  console.log(`server running on port ${PORT}`)
});