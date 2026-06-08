app.use(
    "/api/expenses",
    require("./routes/expenseRoutes")
   );
   
   app.use(
    "/api/budgets",
    require("./routes/budgetRoutes")
   );
   
   app.use(
    "/api/dashboard",
    require("./routes/dashboardRoutes")
   );
   
   app.use(
    require("./middleware/errorHandler")
   );