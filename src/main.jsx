import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.css"; 
import { ExpenseProvider } from './Context/ExpenseContext.jsx'; // ✅ Correct this path if needed

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </React.StrictMode>
);
