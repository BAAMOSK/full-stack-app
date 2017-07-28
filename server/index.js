const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const { mongoURI } = require('./config');

mongoose.connect(mongoURI);
const app = express();
const { PORT } = require('./config');

require('./routes/authRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});