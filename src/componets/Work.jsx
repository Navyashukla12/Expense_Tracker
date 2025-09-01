import React from "react";
import { ExpenseProvider } from "../Context/ExpenseContext";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Parts/Dashboard";

const Work= () => {
  return (
    <ExpenseProvider>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </ExpenseProvider>
  );
};

export default Work;