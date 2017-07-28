const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const { mongoURI, PORT, cookieKey } = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ cookieKey ]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});