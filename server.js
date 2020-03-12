const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('dist'));

app.get('/hey', (req, res) => {
  res.send('hey back');
})

app.listen(port, () => {
  console.log(`listening on ${port}`)})