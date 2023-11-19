const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  disLikeBlog,
  uploadIMages,
} = require("../controller/blogController");
const { uploadPhoto,blogImageResize } = require("../middlewares/uploadImages");

router.post("/", authMiddleware, isAdmin, createBlog);
router.put('/upload/:id',authMiddleware,isAdmin,uploadPhoto.array('images',2),blogImageResize,uploadIMages)

router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, disLikeBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
