const Budget =
require("../models/Budget");

exports.createBudget =
async(req,res)=>{

try{

 const budget =
 await Budget.create({

  user:req.user.id,

  category:req.body.category,

  monthlyLimit:
  req.body.monthlyLimit

 });

 res.status(201).json(budget);

}catch(error){

 res.status(500).json(error);

}

};