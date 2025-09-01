 import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseChart from "./ExpenseChart";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const Dashboard = () => {
  return (
    <div className="space-y-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-purple-700">Expense Dashboard</h1>

      {/* Expense summary */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100">
        <ExpenseSummary />
      </div>

      {/* Chart + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 border border-purple-100">
          <h2 className="text-lg font-semibold text-purple-600 mb-4">
            Spending Overview
          </h2>
          <ExpenseChart />
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100">
          <h2 className="text-lg font-semibold text-purple-600 mb-4">
            Add New Expense
          </h2>
          <ExpenseForm />
        </div>
      </div>

      {/* Expense List */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100">
        <h2 className="text-lg font-semibold text-purple-600 mb-4">
          Recent Expenses
        </h2>
        <ExpenseList />
      </div>
    </div>
  );
};

export default Dashboard;
