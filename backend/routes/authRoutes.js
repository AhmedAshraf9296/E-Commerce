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
  resetPassword,
  loginAdmin,
  getWishList,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/order/update-order-status/:id",authMiddleware,isAdmin, updateOrderStatus);


router.put("/password",authMiddleware,updatePassword);
router.post("/login", loginUser);
router.post("/login-admin",loginAdmin);
router.post("/cart",authMiddleware,userCart);
router.post("/cart/applyCoupon",authMiddleware,applyCoupon);
router.post("/cart/cash-order",authMiddleware,createOrder);
router.get("/all-users", getAllUsers);
router.get("/get-orders", authMiddleware,getOrders);
router.post("/refresh-token", handleRefreshToken);
router.post("/logout", logout);
router.get("/wishlist", authMiddleware, getWishList);
router.get("/cart", authMiddleware, getUserCart);


router.get("/:id", authMiddleware, isAdmin, getUser);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete("/:id",authMiddleware,isAdmin,deleteUser);


router.put("/save-address", authMiddleware,saveAddress);
router.put("/:id", authMiddleware, updateUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);


module.exports = router;
