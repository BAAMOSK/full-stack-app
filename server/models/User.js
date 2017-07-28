const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

//first arg is collection, second is the schema
mongoose.model('users', userSchema);
