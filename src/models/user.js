const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
    minlength: 7,

    trim: true,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("password cannot be PASSWORD!");
      }
    },
  },
});

// operation/validations to be done before any functionality of mongoose

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("unable to login");
  }
  // console.log(password);
  // console.log(await bcrypt.hash(password, 8));
  // console.log(user.password);
  const isMatch = await bcrypt.compare(password, user.password);

  console.log(isMatch);

  // if (!isMatch) {
  //   throw new Error("unable to login");
  // }

  // // return user if all requirements match
  return user;
};

// Hash password before saving
userSchema.pre("save", async function (next) {
  const user = this;
  // to check if passwrod is changed or created
  if (user.isModified("password")) {
    // getting user and overriding password
    user.password = await bcrypt.hash(user.password, 8); // 8 is no. of round to perfom hash
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
