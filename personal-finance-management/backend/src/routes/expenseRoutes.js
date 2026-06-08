const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/authMiddleware");

const {

 createExpense,
 getExpenses,
 updateExpense,
 deleteExpense

} =
require("../controllers/expenseController");

router.post(
 "/",
 auth,
 createExpense
);

router.get(
 "/",
 auth,
 getExpenses
);

router.put(
 "/:id",
 auth,
 updateExpense
);

router.delete(
 "/:id",
 auth,
 deleteExpense
);

module.exports = router;