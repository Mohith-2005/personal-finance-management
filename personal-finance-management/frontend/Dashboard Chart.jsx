import {

    Chart as ChartJS,
   
    ArcElement,
   
    Tooltip,
   
    Legend
   
   } from "chart.js";
   
   import { Pie }
   from "react-chartjs-2";
   
   ChartJS.register(
   
    ArcElement,
    Tooltip,
    Legend
   
   );
   
   function ExpenseChart(){
   
    const data = {
   
    labels:[
     "Food",
     "Transport",
     "Health"
    ],
   
    datasets:[{
   
     data:[
      5000,
      3000,
      2000
     ]
   
    }]
   
    };
   
    return(
   
     <Pie data={data} />
   
    );
   
   }
   
   export default ExpenseChart;