const axios = require("axios");

const ML_URL =
"http://localhost:8000";

exports.getForecast =
async(day)=>{

 const response =
 await axios.post(

 `${ML_URL}/forecast`,

 {day}

 );

 return response.data;

};