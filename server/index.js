const express = require('express');
require('./services/passport');

const app = express();
const { PORT } = require('./config');

require('./routes/authRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});