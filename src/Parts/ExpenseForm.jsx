 import React, { useState } from "react";
import { useExpenses } from "../Context/ExpenseContext";
import toast from "react-hot-toast";

const ExpenseForm = () => {
  const { addExpense } = useExpenses();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categoryOptions = [
    { value: "food", label: "🍔 Food & Dining", color: "bg-pink-100 text-pink-700" },
    { value: "transport", label: "🚗 Transportation", color: "bg-blue-100 text-blue-700" },
    { value: "entertainment", label: "🎬 Entertainment", color: "bg-purple-100 text-purple-700" },
    { value: "shopping", label: "🛍️ Shopping", color: "bg-yellow-100 text-yellow-700" },
    { value: "utilities", label: "💡 Utilities", color: "bg-orange-100 text-orange-700" },
    { value: "health", label: "❤️ Health & Medical", color: "bg-green-100 text-green-700" },
    { value: "other", label: "✨ Other", color: "bg-gray-100 text-gray-700" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!description.trim()) throw new Error("Please enter a description");
      if (!amount || isNaN(Number(amount)) || Number(amount) <= 0)
        throw new Error("Please enter a valid amount");

      addExpense({
        description: description.trim(),
        amount: Number(amount),
        category,
        date,
      });

      toast.success("Expense added successfully 🎉");

      setDescription("");
      setAmount("");
      setCategory("food");
      setDate(new Date().toISOString().split("T")[0]);
    } catch (error) {
      toast.error(error.message || "Failed to add expense");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-pink-50 via-white to-blue-50 rounded-2xl shadow-xl p-8 w-full max-w-lg mx-auto border border-gray-100">
      <h2 className="text-3xl font-bold text-expense-dark mb-6 text-center tracking-tight">
        ✨ Add New Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="e.g., Grocery shopping"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200 outline-none"
            disabled={isSubmitting}
          />
        </div>

        {/* Amount */}
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 outline-none"
            disabled={isSubmitting}
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 outline-none"
            disabled={isSubmitting}
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value} className={option.color}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200 outline-none"
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "➕ Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
