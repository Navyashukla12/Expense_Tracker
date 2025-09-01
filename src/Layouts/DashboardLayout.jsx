import React from "react";
import { Toaster } from "react-hot-toast";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-purple-50">
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#4c1d95", // deep purple
            color: "#fff",
            borderRadius: "8px",
          },
          success: {
            iconTheme: {
              primary: "#8b5cf6", // purple
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      {/* Header */}
      <header className="bg-purple-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center md:justify-between items-center">
            <h1 className="text-3xl font-bold text-white tracking-wide">
              Expense Tracker
            </h1>
            <p className="hidden md:block text-purple-100 font-medium">
              Track your expenses with ease
            </p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-purple-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-purple-100 text-sm">
            Budget Wow Tracker &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
