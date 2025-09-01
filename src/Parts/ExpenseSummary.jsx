 import React from "react";
import { useExpenses } from "../Context/ExpenseContext";
import {
  formatCurrency,
  getExpensesByCategory,
  getTotalExpenses,
} from "../utils/expenses";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";

const ExpenseSummary = () => {
  const { expenses } = useExpenses();

  const totalExpenses = getTotalExpenses(expenses);
  const categoriesData = getExpensesByCategory(expenses);

  let highestCategory = { name: "none", amount: 0 };

  Object.entries(categoriesData).forEach(([category, amount]) => {
    if (amount > highestCategory.amount) {
      highestCategory = { name: category, amount };
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Expenses */}
      <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center space-x-4">
          <div className="bg-pink-100 p-4 rounded-full">
            <Wallet size={28} className="text-pink-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Total Expenses</h3>
            <p className="text-2xl font-bold text-gray-800">
              {formatCurrency(totalExpenses)}
            </p>
          </div>
        </div>
      </div>

      {/* Highest Category */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center space-x-4">
          <div className="bg-purple-100 p-4 rounded-full">
            <TrendingUp size={28} className="text-purple-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">
              Highest Category
            </h3>
            <p className="text-2xl font-bold text-gray-800">
              {highestCategory.name !== "none" ? (
                <>
                  <span className="capitalize">{highestCategory.name}</span>
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    ({formatCurrency(highestCategory.amount)})
                  </span>
                </>
              ) : (
                "None"
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Total Entries */}
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 p-4 rounded-full">
            <TrendingDown size={28} className="text-green-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Total Entries</h3>
            <p className="text-2xl font-bold text-gray-800">
              {expenses.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
