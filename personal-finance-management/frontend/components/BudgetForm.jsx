import {useState}
from "react";

import api
from "../services/api";

function BudgetForm(){

 const [category,setCategory] =
 useState("");

 const [monthlyLimit,
 setMonthlyLimit] =
 useState("");

 const submit =
 async(e)=>{

  e.preventDefault();

  await api.post(

   "/budgets",

   {
    category,
    monthlyLimit
   }

  );

 };

 return(

 <form onSubmit={submit}>

  <input

   placeholder="Category"

   onChange={(e)=>
   setCategory(e.target.value)}

  />

  <input

   placeholder="Budget"

   onChange={(e)=>
   setMonthlyLimit(
    e.target.value
   )}

  />

  <button>

   Save Budget

  </button>

 </form>

 );

}

export default BudgetForm;