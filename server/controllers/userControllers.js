import User from "../model/userModel.js";
import { unlink } from "fs/promises";
import { join } from "path";
import path from "path";
import fs from "fs";
import ErrorHandler from "../utils/errorHandler.js";
import { tryCatchAsyncError } from "../middleWares/tryCatchAsyncErrors.js";
//register
export const register = tryCatchAsyncError(async (req, res, next) => {
  const { fullName, email, mobile_No, password } = req.body;
  if (!fullName || !email || !mobile_No || !password)
    return next(new ErrorHandler("please provide required field", 400));
  const exist = await User.findOne({ email });
  if (exist) return next(new ErrorHandler("email already exist", 400));

  const user = await User.create({
    fullName,
    email,
    mobile_No,
    password,
  });
  res.status(201).json({
    success: true,
    message: "register sucessfully",
    user,
  });
});

//login
export const login = tryCatchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new ErrorHandler("please provide required field", 400));

  if (!/\S+@\S+\.\S+/.test(email))
    return next(new ErrorHandler("email must be valid", 400));

  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler("user doesn't exist", 400));

  const isMatched = await user.comparePassword(password);
  if (!isMatched) return next(new ErrorHandler("invalid credentials", 400));

  const token = await user.getJwtToken();

  res.status(200).json({
    success: true,
    message: "login sucessful",
    user,
    token,
  });
});
//logged in single user(profile);
export const loggedInUser = tryCatchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) return next(new ErrorHandler("user doesnt exist", 404));

  res.status(200).json({
    success: true,
    message: "user get sucessfully",
    data:user,
  });
});

//update profile

export const updateProfile = tryCatchAsyncError(async (req, res,next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    if (req.file) {
      await unlink(req.file.path);
    }
    return next(new ErrorHandler("user not found", 404));
  }

  const { fullName } = req.body;
  if (!fullName) {
    if (req.file) {
      await unlink(req.file.path);
    }
    return next(new ErrorHandler("please provide required field", 400));
  }

  const existingImageUrl = user.avatar.url;
  const baseUrl = `${req.protocol}://${req.hostname}:${
    process.env.PORT || 5000
  }`;
  const avatarPath = req.file.filename;
  let avatarImageUrl;
  if (existingImageUrl) {
    const filename = path.basename(existingImageUrl);
    const previousImagePath = path.join("public", "gallery", filename);
    fs.unlinkSync(previousImagePath);
  }

  if (avatarPath) {
    avatarImageUrl=`${baseUrl}/gallery/${avatarPath}`.replace(/\\/g, "/");

  }
  user.fullName = fullName;
  user.avatar = avatarImageUrl ? { url: avatarImageUrl } : undefined;
  await user.save();
  res.status(200).json({
    success: true,
    message: "profile updated",
    user,
  });
});

//change password
export const changePassword = tryCatchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  if (!user) return next(new ErrorHandler("user not found", 404));

  const { oldPassword, newPassword, confirmPassword } = req.body;
  if (!oldPassword || !newPassword)
    return next(new ErrorHandler("field must be filled", 400));

  if (newPassword !== confirmPassword)
    return next(new ErrorHandler("password must match", 400));

  const isMatched = await user.comparePassword(oldPassword);
  if (!isMatched)
    return next(new ErrorHandler("old password is incorrect", 400));

  user.password = newPassword;
  await user.save();
  res.status(200).json({
    success: true,
    message: "password changed sucessfully",
  });
});
