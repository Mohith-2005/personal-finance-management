const User = require("../models/User");
const RefreshToken =
require("../models/RefreshToken");

const bcrypt = require("bcryptjs");

const {
 generateAccessToken,
 generateRefreshToken
} = require("../utils/generateTokens");

exports.registerUser = async(req,res)=>{

try{

 const {
  name,
  email,
  password
 } = req.body;

 const exists =
 await User.findOne({email});

 if(exists){

   return res.status(400).json({
     message:"User already exists"
   });

 }

 const hashed =
 await bcrypt.hash(password,10);

 const user =
 await User.create({

    name,
    email,
    password:hashed

 });

 res.status(201).json({
   message:"User Registered",
   user
 });

}catch(error){

 res.status(500).json(error);

}
};