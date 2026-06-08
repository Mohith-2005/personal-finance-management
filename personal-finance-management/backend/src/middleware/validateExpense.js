module.exports =
(req,res,next)=>{

 const {
  title,
  amount
 } = req.body;

 if(!title){

   return res.status(400).json({

    message:"Title Required"

   });

 }

 if(amount <= 0){

   return res.status(400).json({

    message:"Invalid Amount"

   });

 }

 next();

};