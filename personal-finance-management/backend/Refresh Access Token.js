exports.refreshAccessToken =
async(req,res)=>{

try{

 const {refreshToken} =
 req.body;

 const storedToken =
 await RefreshToken.findOne({

  token:refreshToken

 });

 if(!storedToken){

   return res.status(403).json({
      message:"Invalid Token"
   });

 }

 const decoded =
 jwt.verify(

 refreshToken,

 process.env.JWT_REFRESH_SECRET

 );

 const accessToken =
 generateAccessToken(
 decoded.id
 );

 res.json({
   accessToken
 });

}catch(error){

 res.status(500).json(error);

}
};