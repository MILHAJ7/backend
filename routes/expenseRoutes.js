const express = require("express");
const router = express.Router();
const {
  getExpenses,
  createExpense,
  getExpenseById,
  updateExpense,
  deleteExpense
} = require("../controllers/expensecontroller");

router.get("/", getExpenses);
router.post("/", createExpense);
router.get("/:id", getExpenseById);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

module.exports = router;