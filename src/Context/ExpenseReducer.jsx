
const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXPENSES':
      return {
        ...state,
        expenses: action.payload,
        loading: false,
        error: null,
      };

    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case 'REMOVE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };

    case 'UPDATE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.id ? action.payload : expense
        ),
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default ExpenseReducer;
