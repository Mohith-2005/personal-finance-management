exports.loginUser = async(req,res)=>{

    try{
    
     const {
       email,
       password
     } = req.body;
    
     const user =
     await User.findOne({email});
    
     if(!user){
    
       return res.status(401).json({
        message:"Invalid Credentials"
       });
    
     }
    
     const match =
     await bcrypt.compare(
      password,
      user.password
     );
    
     if(!match){
    
       return res.status(401).json({
        message:"Invalid Credentials"
       });
    
     }
    
     const accessToken =
     generateAccessToken(user._id);
    
     const refreshToken =
     generateRefreshToken(user._id);
    
     await RefreshToken.create({
    
       user:user._id,
       token:refreshToken
    
     });
    
     res.json({
    
       accessToken,
       refreshToken
    
     });
    
    }catch(error){
    
     res.status(500).json(error);
    
    }
    };