const Expense = require("../models/expense");

// GET all
exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (err) {
    next(err);
  }
};

// POST
exports.createExpense = async (req, res, next) => {
  try {
    const { title, amount, category, date } = req.body;

    if (!title || !amount) {
      return res.status(400).json({ message: "Title & Amount required" });
    }

    const expense = await Expense.create({ title, amount, category, date });
    res.status(201).json(expense);
  } catch (err) {
    next(err);
  }
};

// GET by ID
exports.getExpenseById = async (req, res, next) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: "Not found" });

    res.status(200).json(expense);
  } catch (err) {
    next(err);
  }
};

// PUT
exports.updateExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!expense) return res.status(404).json({ message: "Not found" });

    res.status(200).json(expense);
  } catch (err) {
    next(err);
  }
};

// DELETE
exports.deleteExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    next(err);
  }
};