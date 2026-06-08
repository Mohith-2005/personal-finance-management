import {
    useEffect,
    useState
   }
   from "react";
   
   import api
   from "../services/api";
   
   function ExpenseList(){
   
    const [expenses,setExpenses] =
    useState([]);
   
    useEffect(()=>{
   
     loadExpenses();
   
    },[]);
   
    const loadExpenses =
    async()=>{
   
     const res =
     await api.get("/expenses");
   
     setExpenses(
      res.data
     );
   
    };
   
    return(
   
     <div>
   
      {
       expenses.map((item)=>(
   
        <div key={item._id}>
   
         <h4>
          {item.title}
         </h4>
   
         <p>
          ₹{item.amount}
         </p>
   
         <p>
          {item.category}
         </p>
   
        </div>
   
       ))
      }
   
     </div>
   
    );
   
   }
   
   export default ExpenseList;