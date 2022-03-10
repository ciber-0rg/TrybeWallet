// Coloque aqui suas actions

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const TOTAL_EXPENSES = 'TOTAL_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const USER = (email) => ({
  type: 'USER',
  email,
});

export const addExpense = (expenses) => ({
  type: ADD_EXPENSE,
  expenses,

});

// talvez adicionar um loading
const requestCurrencies = () => ({
  type: 'REQUEST_CURRENCIES',
});

const receiveCurrencies = (payloadCurrencies) => ({
  type: RECEIVE_CURRENCIES,
  payloadCurrencies,
});

export const totalExpended = (totalExpenses) => ({
  type: TOTAL_EXPENSES,
  totalExpenses,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await response.json();

    delete exchangeRates.USDT;

    return dispatch(receiveCurrencies(exchangeRates));
  };
}
