const Expense =
require("../models/Expense");

exports.createExpense =
async(req,res)=>{

try{

 const expense =
 await Expense.create({

  user:req.user.id,

  title:req.body.title,

  category:req.body.category,

  amount:req.body.amount

 });

 res.status(201).json(expense);

}catch(error){

 res.status(500).json(error);

}

};