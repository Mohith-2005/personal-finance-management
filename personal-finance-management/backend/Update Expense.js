exports.updateExpense =
async(req,res)=>{

try{

 const expense =
 await Expense.findById(
  req.params.id
 );

 if(!expense){

  return res.status(404).json({
   message:"Not Found"
  });

 }

 expense.title =
 req.body.title;

 expense.category =
 req.body.category;

 expense.amount =
 req.body.amount;

 await expense.save();

 res.json(expense);

}catch(error){

 res.status(500).json(error);

}

};