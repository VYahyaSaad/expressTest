const mongoose = require("mongoose")
const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

const UserModel = mongoose.model("User",UserSchema)
module.exports = UserModel