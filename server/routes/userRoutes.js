import express from "express";
const router = express.Router();
import {
  changePassword,
  loggedInUser,
  login,
  register,
  updateProfile,
} from "../controllers/userControllers.js";
import { isAuthenticated } from "../middleWares/auth.js";
import upload from "../file/upload.js";

//register user
router
  .route("/register").post(register);

//login user
router
  .route("/login").post(login);

router
  .route("/single/user").get(isAuthenticated, loggedInUser);

//profile update  
router
  .route("/update/user")
  .put(isAuthenticated, upload.single("avatar"), updateProfile);

//password change  
router
  .route("/change/password").put(isAuthenticated, changePassword);

export default router;
