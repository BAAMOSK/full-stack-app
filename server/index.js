const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const { mongoURI, cookieKey } = require('./config/keys');
const jsonParser = require('body-parser').json();
const PORT = process.env.PORT || 5000;
require('./models/User');
require('./services/passport');

mongoose.connect(mongoURI);

const app = express();
app.use(jsonParser);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ cookieKey ]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});