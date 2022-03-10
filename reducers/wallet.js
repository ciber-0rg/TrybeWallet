// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_EXPENSE, RECEIVE_CURRENCIES, TOTAL_EXPENSES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {

  currencies: [],
  expenses: [],
  totalExpenses: 0,

};

const sum = (x, y) => {
  const soma = Number(x) + Number(y);
  return soma.toFixed(2);
};

// const sub = (x, y) => {
//   if (!y) { return Number(x); }
//   const subtrai = Number(x) - Number(y);
//   return subtrai;
// };

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payloadCurrencies,
    };
  case TOTAL_EXPENSES:
    return {
      ...state,
      totalExpenses: sum(state.totalExpenses, action.totalExpenses),
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expenses) => expenses.id !== action.id)],
    };
  default:
    return state;
  }
}

export default wallet;
