const cloudinary = require('cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_CLOUDINARY_KEY, 
  api_secret: process.env.API_CLOUDINARY_SECRET
});

const cloudinaryUploadImage = async (fileToUpload)=>{
    return new Promise((resolve,reject)=>{
        cloudinary.uploader.upload(fileToUpload,(result)=>{
            resolve({
                url:result.secure_url,
                asset_id:result.asset_id,
                public_id:result.public_id
            },{
                resource_type:"auto",
            });
        })
    })
}

const cloudinaryDeleteImage = async (fileToDelete)=>{
    return new Promise((resolve,reject)=>{
        cloudinary.uploader.destroy(fileToDelete,(result)=>{
            resolve({
                url:result.secure_url,
                asset_id:result.asset_id,
                public_id:result.public_id
            },{
                resource_type:"auto",
            });
        })
    })
}

module.exports = {cloudinaryUploadImage,cloudinaryDeleteImage};