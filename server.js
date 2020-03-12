const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hi, from server.js');
})

app.listen(port, () => {
  console.log(`listening on ${port}`)})