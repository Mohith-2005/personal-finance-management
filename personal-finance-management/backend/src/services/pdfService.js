const PDFDocument =
require("pdfkit");

const fs =
require("fs");

exports.generateReport =
(expenses)=>{

 const doc =
 new PDFDocument();

 doc.pipe(

  fs.createWriteStream(

   "report.pdf"

  )

 );

 doc.fontSize(20);

 doc.text(
  "Monthly Expense Report"
 );

 expenses.forEach((e)=>{

  doc.text(

   `${e.category} - ₹${e.amount}`

  );

 });

 doc.end();

};