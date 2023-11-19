const mongoose = require('mongoose'); 

let enqSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:"Submitted",
        enum:["Submitted","Contacted","Progress"]
    }
});


module.exports = mongoose.model('Enquiry', enqSchema);