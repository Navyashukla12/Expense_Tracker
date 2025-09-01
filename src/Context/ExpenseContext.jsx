
import React, { createContext, useReducer, useEffect, useContext } from 'react';
import ExpenseReducer from '../Context/ExpenseReducer.jsx';

const ExpenseContext = createContext();

const initialState = {
  expenses: [],
  loading: false,
  error: null,
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  useEffect(() => {
    const fetchExpenses = async () => {
      dispatch({ type: 'SET_LOADING' });

      try {
        const data = JSON.parse(localStorage.getItem('expenses')) || [];
        dispatch({ type: 'SET_EXPENSES', payload: data });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load expenses.' });
      }
    };

    fetchExpenses();
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses));
  }, [state.expenses]);

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: crypto.randomUUID(),
    };
    dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
  };

  const removeExpense = (id) => {
    dispatch({ type: 'REMOVE_EXPENSE', payload: id });
  };

  const updateExpense = (updatedExpense) => {
    dispatch({ type: 'UPDATE_EXPENSE', payload: updatedExpense });
  };

  return (
    <ExpenseContext.Provider
      value={{
        ...state,
        addExpense,
        removeExpense,
        updateExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses= () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenses must be used within an ExpenseProvider');
  }
  return context;
};

export default ExpenseContext;
