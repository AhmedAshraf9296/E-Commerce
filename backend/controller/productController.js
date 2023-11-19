const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongodbid");
const {cloudinaryUploadImage,cloudinaryDeleteImage} = require("../utils/cloudinary");
const fs = require("fs");

const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Product.findByIdAndDelete(id, req.body, {
      new: true,
    });
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    //Filtering
    const queryObject = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((ele) => delete queryObject[ele]);
    let queryString = JSON.stringify(queryObject);
    queryString = queryString.replace(
      /\b(gte|gt|lt|lte)\b/g,
      (match) => `$${match}`
    );

    let query = Product.find(JSON.parse(queryString));

    //Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      console.log("sortBysortBy", sortBy);
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //Limiting fields

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // pagination

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    console.log("page,limit,skip", page, limit, skip);
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const countProduct = await Product.countDocuments();
      if (skip >= countProduct) throw new Error("This page not exist");
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

const addToWishList = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyAdded = user.wishlist.find((id) => id.toString() == prodId);
    if (alreadyAdded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: prodId },
        },
        { new: true }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        { new: true }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star,comment, prodId } = req.body;
  try {
    const product = await Product.findById(prodId);
    let alreadyRated = product.ratings.find(
      (userId) => userId.postedby.toString() == _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: {
            $elemMatch: alreadyRated,
          },
        },
        {
          $set: { "ratings.$.star": star,"ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: {
              star: star,
              comment:comment,
              postedby: _id,
            },
          },
        },
        { new: true }
      );
    }
    const getAllRatings = await Product.findById(prodId);
    let totalRatings = getAllRatings.ratings.length;
    let ratingSum = getAllRatings.ratings
      .map((rating) => rating.star)
      .reduce((prev, curr) => prev + curr, 0);
    let actualRatings = Math.round(ratingSum / totalRatings);
    const finalRate = await Product.findByIdAndUpdate(
      prodId,
      { totalRatings: actualRatings },
      { new: true }
    );
    res.json(finalRate);
  } catch (error) {
    throw new Error(error);
  }
});

const uploadIMages = asyncHandler(async (req, res) => {
  try {
    const uploader = (path)=> cloudinaryUploadImage(path,"images")
    const urls = [];
    const files = req.files;
    for(const file of files){
      const {path} = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    const images =urls.map(file=> file);
    res.json(images);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteIMages = asyncHandler(async (req, res) => {
  const {id} = req.params;
  try {
    const deleted = cloudinaryDeleteImage(id,"images");
    res.json({message:"Deleted"});
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
  uploadIMages,
  deleteIMages
};
