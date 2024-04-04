import { Router } from "express";
import {
  login,
  logout,
  register,
  changePassword,
  refreshToken,
  getUser,
  updateUser,
  updateUserAvatar,
} from "../controllers/user.controller.js";
import upload from "../middlewares/multer.middleware.js";
import auth from "../middlewares/auth.js";
const router = Router();
router.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  register
);
router.post("/login", login);
router.get("/logout", auth, logout);
router.post("/refreshtoken", refreshToken);
router.post("/getUser", auth, getUser);
router.post("/updateUser", auth, updateUser);
router.post("/changePassword", auth, changePassword);
router.post(
  "/updateUserAvatar",
  auth,
  upload.single("avatarImage"),
  updateUserAvatar
);
export default router;
