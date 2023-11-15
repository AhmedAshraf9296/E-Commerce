const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password",authMiddleware,updatePassword);
router.post("/login", loginUser);
router.get("/all-users", getAllUsers);
router.post("/refresh-token", handleRefreshToken);
router.post("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.delete("/:id",authMiddleware,isAdmin,deleteUser);
router.put("/:id", authMiddleware, updateUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);


module.exports = router;
