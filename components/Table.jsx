import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense, totalExpended } from '../actions';

class Table extends React.Component {
  deleteClick = (id, convertedExpense) => {
    const { dispatch, expenses } = this.props;
    const minusOne = -1;

    if (expenses.length !== 0) {
      const negativeExpense = convertedExpense * minusOne;
      dispatch(totalExpended(negativeExpense));
    }

    dispatch(deleteExpense(id));
  }

  render() {
    const { expenses } = this.props;
    return (
      <div
        style={ {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'rgb(138, 51, 255)',
        } }
      >
        <table>
          <tr>
            <th style={ { color: 'white', padding: '10px' } }> Descrição </th>
            <th style={ { color: 'white', padding: '10px' } }> Tag </th>
            <th style={ { color: 'white', padding: '10px' } }> Método de pagamento </th>
            <th style={ { color: 'white', padding: '10px' } }> Valor </th>
            <th style={ { color: 'white', padding: '10px' } }> Moeda </th>
            <th style={ { color: 'white', padding: '10px' } }> Câmbio utilizado </th>
            <th style={ { color: 'white', padding: '10px' } }> Valor convertido </th>
            <th style={ { color: 'white', padding: '10px' } }> Moeda de conversão </th>
            <th style={ { color: 'white', padding: '10px' } }> Editar/Excluir </th>
          </tr>

          {expenses.length !== 0 && (
            expenses.map((expense) => {
              const convertedExpense = Number(expense.value) * Number(
                expense.exchangeRates[`${expense.currency}`].ask,
              );

              return (
                <tr key={ expense.id }>
                  <td style={ { color: 'white', textAlign: 'center', padding: '20px' } }>
                    { expense.description }
                  </td>
                  <td style={ { color: 'white', textAlign: 'center', padding: '20px' } }>
                    { expense.tag }
                  </td>
                  <td style={ { color: 'white', textAlign: 'center', padding: '20px' } }>
                    { expense.method }
                  </td>
                  <td style={ { color: 'white', textAlign: 'center', padding: '20px' } }>
                    { Number(expense.value).toFixed(2) }
                  </td>
                  <td style={ { color: 'white', textAlign: 'center', padding: '20px' } }>
                    { expense.exchangeRates[`${expense.currency}`].name
                      .split('/Real Brasileiro') }
                  </td>
                  <td style={ { color: 'white', textAlign: 'center', padding: '20px' } }>
                    { Number(expense.exchangeRates[`${expense.currency}`].ask).toFixed(2)}
                  </td>
                  <td style={ { color: 'white', textAlign: 'center', padding: '20px' } }>
                    { convertedExpense.toFixed(2) }
                  </td>
                  <td style={ { color: 'white', textAlign: 'center', padding: '20px' } }>
                    Real
                  </td>
                  <td style={ { color: 'white', textAlign: 'center', padding: '20px' } }>
                    <button
                      type="button"
                      onClick={ () => this.deleteClick(expense.id, convertedExpense) }
                      name="deleteButton"
                      data-testid="delete-btn"
                    >
                      {' '}
                      Excluir
                      {' '}

                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </table>
      </div>

    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.array).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Table);
