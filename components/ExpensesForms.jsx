import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchCurrencies, totalExpended } from '../actions/index';

class ExpensesForm extends React.Component {
  state={
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
    exchangeValue: 0, // ja ter uma chave que diz o cambio
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { id, value, currency } = this.state;
    const { dispatch, currencies } = this.props;

    // schedule next render
    this.setState({
      id: id + 1,
      value: 0,
    });

    // ...obj/array clona { ...obj/array, NOVO VALOR }
    dispatch(addExpense({ ...this.state, exchangeRates: { ...currencies } }));
    dispatch(fetchCurrencies());
    this.totalExpendedFUNCTION(value, currency);
  };

  totalExpendedFUNCTION = (value, currency) => {
    const { currencies, dispatch } = this.props;
    // transforma exchangeRates em array
    const exchangeRatesArray = Object.values({ ...currencies });
    // filtra o array para achar o cambio
    const multiplierASK = exchangeRatesArray.filter(({ code }) => currency === code);
    // multiplica o valor pelo cambio
    const realExpense = value * Number(multiplierASK[0].ask);
    // adiciona valor convertido no store
    dispatch(totalExpended(realExpense));
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const currenciesArr = Object.values(currencies);
    return (
      <form
        style={ {
          padding: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          // backgroundColor: 'rgb(255, 139, 254)',
        } }
      >
        <input
          placeholder="expense value"
          type="text"
          name="value"
          value={ value }
          data-testid="value-input"
          onChange={ this.handleChange }
        />

        <input
          placeholder="expense description"
          type="text"
          name="description"
          value={ description }
          data-testid="description-input"
          onChange={ this.handleChange }
        />

        <div>
          <label htmlFor="currency">
            Moeda
            <select
              value={ currency }
              id="currency"
              data-testid="currency-input"
              onChange={ this.handleChange }
              name="currency"
            >
              { currenciesArr.map(({ code }) => (
                <option
                  data-testid={ ` ${code} ` }
                  key={ code }
                >
                  { code }
                </option>))}
            </select>
          </label>
        </div>

        <select
          value={ method }
          data-testid="method-input"
          name="method"
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>

        <select
          value={ tag }
          data-testid="tag-input"
          name="tag"
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>

        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar Despesa

        </button>

      </form>
    );
  }
}

ExpensesForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.array).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
  totalExpenses: wallet.totalExpenses,
});

export default connect(mapStateToProps)(ExpensesForm);
