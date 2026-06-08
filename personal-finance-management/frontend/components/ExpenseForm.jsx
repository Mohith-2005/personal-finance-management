import {useState}
from "react";

import api
from "../services/api";

function ExpenseForm(){

 const [title,setTitle] =
 useState("");

 const [amount,setAmount] =
 useState("");

 const [category,setCategory] =
 useState("Food");

 const submit =
 async(e)=>{

  e.preventDefault();

  await api.post(

   "/expenses",

   {
    title,
    amount,
    category
   }

  );

  window.location.reload();

 };

 return(

 <form onSubmit={submit}>

  <input

   placeholder="Title"

   onChange={(e)=>
   setTitle(e.target.value)}

  />

  <input

   placeholder="Amount"

   onChange={(e)=>
   setAmount(e.target.value)}

  />

  <select

   onChange={(e)=>
   setCategory(e.target.value)}

  >

   <option>Food</option>
   <option>Transport</option>
   <option>Health</option>
   <option>Utilities</option>
   <option>Entertainment</option>

  </select>

  <button>

   Add Expense

  </button>

 </form>

 );

}

export default ExpenseForm;