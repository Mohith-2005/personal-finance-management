exports.getExpenses =
async(req,res)=>{

try{

 const expenses =
 await Expense.find({

  user:req.user.id

 }).sort({date:-1});

 res.json(expenses);

}catch(error){

 res.status(500).json(error);

}

};