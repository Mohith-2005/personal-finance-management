exports.getBudgets =
async(req,res)=>{

try{

 const budgets =
 await Budget.find({

  user:req.user.id

 });

 res.json(budgets);

}catch(error){

 res.status(500).json(error);

}

};