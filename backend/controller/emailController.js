const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');

const sendEmail = asyncHandler(async (data,req,res)=>{
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.EMAIL_PASSWORD,
            },
          });
    
          const info = await transporter.sendMail({
            from: 'Ashrooooooof',
            to: data.to,
            subject: data.subject,
            text: data.text,
            html: data.html,
          });
        
          console.log("Message sent: %s", info.messageId);
         
    } catch (error) {
        throw new Error(error)
    }

});

module.exports={sendEmail}