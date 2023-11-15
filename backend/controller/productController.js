const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

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
    const queryObject = {... req.query};
    const excludeFields = ['page','sort','limit','fields']
    excludeFields.forEach(ele=> delete queryObject[ele])
    let queryString = JSON.stringify(queryObject);
    queryString = queryString.replace(/\b(gte|gt|lt|lte)\b/g,match => `$${match}`)
    
    let query = Product.find(JSON.parse(queryString))
    
    //Sorting
    if(req.query.sort){
        const sortBy = req.query.sort.split(',').join(' ');
        console.log('sortBysortBy',sortBy);
        query = query.sort(sortBy)
    }else{
        query = query.sort('-createdAt')
    }

    //Limiting fields

    if(req.query.fields){
        const fields = req.query.fields.split(',').join(' ');
        query = query.select(fields);
    }else{
        query = query.select('-__v');
    }

    // pagination

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page-1) * limit;
    console.log('page,limit,skip',page,limit,skip)
    query = query.skip(skip).limit(limit);
    if(req.query.page){
        const countProduct = await Product.countDocuments();
        if(skip >= countProduct) throw new Error('This page not exist')
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createProduct, getProduct, getAllProducts ,updateProduct,deleteProduct};
