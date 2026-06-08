import ExpenseForm
from "../components/ExpenseForm";

import ExpenseList
from "../components/ExpenseList";

import BudgetForm
from "../components/BudgetForm";

function Dashboard(){

 return(

 <div>

  <h1>

   Personal Finance Dashboard

  </h1>

  <ExpenseForm />

  <BudgetForm />

  <ExpenseList />

 </div>

 );

}

export default Dashboard;