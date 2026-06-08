const nodemailer =
require("nodemailer");

const transporter =
nodemailer.createTransport({

 service:"gmail",

 auth:{
  user:process.env.EMAIL_USER,
  pass:process.env.EMAIL_PASS
 }

});

exports.sendAlert =
async(email,message)=>{

 await transporter.sendMail({

  from:process.env.EMAIL_USER,

  to:email,

  subject:"Budget Alert",

  text:message

 });

};