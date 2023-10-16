import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import { tryCatchAsyncError } from "./tryCatchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";

export const isAuthenticated = tryCatchAsyncError(async (req, res, next) => {
  const token = req?.headers?.authorization?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "please login at first!",
    });
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decodedData.id);
  if (!user) return next(new ErrorHandler("user not found", 400));
  req.user = user;
  next();
});
//for adminOnly

export const isAuthAdmin = tryCatchAsyncError(async (req, res, next) => {
  if (!req.user)
    return next(
      new ErrorHandler("you must be authenticate to acess this resouse!", 401)
    );

  if (req.user.role !== "admin")
    return next(new ErrorHandler("Not authorize", 403));

  next();
});
