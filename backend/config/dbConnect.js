const { default: mongoose } = require("mongoose")
const dbConnect = ()=>{
    try {
        const con = mongoose.connect(process.env.MONGODB_URI);
        console.log('database connected successfully');
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = dbConnect;