import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "fullName is required"],
    },

    email: {
      type: String,

      required: [true, "Email is required"],
    },
    mobile_No: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    avatar: {
      url: {
        type: String,
      },
    },
    password: {
      type: String,
      required: [true, "password is required"],
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "user", "seller", "buyer"],
      default: "user",
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//hashed password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//generate jwtToken
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "8h",
  });
};
//compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = new mongoose.model("user", userSchema);
export default User;
