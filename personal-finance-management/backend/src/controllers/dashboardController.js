const Expense =
require("../models/Expense");

exports.getSummary =
async(req,res)=>{

try{

 const expenses =
 await Expense.find({
  user:req.user.id
 });

 const total =
 expenses.reduce(

 (sum,item)=>
 sum + item.amount,

 0

 );

 const food =
 expenses.filter(

 e=>e.category==="Food"

 );

 const foodTotal =
 food.reduce(

 (sum,item)=>
 sum + item.amount,

 0

 );

 res.json({

   totalExpenses:total,

   foodExpense:foodTotal,

   totalTransactions:
   expenses.length

 });

}catch(error){

 res.status(500).json(error);

}

};