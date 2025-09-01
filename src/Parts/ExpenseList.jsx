 import React, { useState } from "react";
import { useExpenses } from "../Context/ExpenseContext"; // Ensure path is correct
import toast from "react-hot-toast";
import {
  formatCurrency,
  formatDate,
  getCategoryTextColor,
} from "../utils/expenses";
import { Trash2 } from "lucide-react";

const ExpenseList = () => {
  const { expenses, removeExpense } = useExpenses();
  const [categoryFilter, setCategoryFilter] = useState("all");

  const categoryOptions = [
    { value: "all", label: "🌍 All Categories" },
    { value: "food", label: "🍔 Food & Dining" },
    { value: "transport", label: "🚗 Transportation" },
    { value: "entertainment", label: "🎬 Entertainment" },
    { value: "shopping", label: "🛍️ Shopping" },
    { value: "utilities", label: "💡 Utilities" },
    { value: "health", label: "❤️ Health & Medical" },
    { value: "other", label: "✨ Other" },
  ];

  const filteredExpenses =
    categoryFilter === "all"
      ? expenses
      : expenses.filter((expense) => expense.category === categoryFilter);

  const sortedExpenses = [...filteredExpenses].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const handleDelete = (id) => {
    removeExpense(id);
    toast.success("Expense deleted successfully 🗑️");
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h2 className="text-3xl font-bold text-expense-dark tracking-tight">
          📊 Expense History
        </h2>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
        >
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Empty State */}
      {sortedExpenses.length === 0 ? (
        <div className="bg-gradient-to-tr from-pink-50 via-white to-blue-50 rounded-xl shadow-md p-10 text-center text-gray-500">
          <p className="mb-2 text-lg font-medium">No expenses found 🚫</p>
          {categoryFilter !== "all" && (
            <p className="text-sm text-gray-600">
              Try changing the filter or add a new expense.
            </p>
          )}
        </div>
      ) : (
        // Expense Table
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-pink-100 to-purple-100">
                <tr>
                  {["Date", "Description", "Category", "Amount", "Action"].map(
                    (header) => (
                      <th
                        key={header}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {sortedExpenses.map((expense) => (
                  <tr
                    key={expense.id}
                    className="hover:bg-pink-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {formatDate(expense.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                      {expense.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryTextColor(
                          expense.category
                        )}`}
                      >
                        {expense.category.charAt(0).toUpperCase() +
                          expense.category.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      {formatCurrency(expense.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleDelete(expense.id)}
                        className="text-red-500 hover:text-red-700 hover:scale-110 transition-all duration-200"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
