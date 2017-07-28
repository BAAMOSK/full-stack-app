const express = require('express');
const logger = require('morgan');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('combined'));

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send({ name: 'Tee' });
})