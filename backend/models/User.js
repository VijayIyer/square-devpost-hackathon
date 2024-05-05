const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  displayName: {
    type: String,
    //required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', (next) => {
    this.displayName = this.username; // considering _id is input by client
   next();
})
module.exports = mongoose.model("User", UserSchema);
