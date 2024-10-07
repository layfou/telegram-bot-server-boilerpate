import express from "express";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello, get!!!')
})

app.post('/', (req, res) => {
  res.send('hello, post!!!')
})

app.listen(3000, () => console.log("server running on port 3000"));