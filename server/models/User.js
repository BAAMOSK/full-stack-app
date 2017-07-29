const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

//first arg is collection, second is the schema
mongoose.model('users', userSchema);
