import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    initialExpense: 0,
    currency: 'BRL',
  }

  render() {
    const { email, totalExpended, expenses } = this.props;
    const { currency, initialExpense } = this.state;
    return (
      <div>
        <header
          style={ {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: 'rgb(255, 139, 254)',
          } }
        >
          <h4>
            TrybeWallet
          </h4>
          <h6 data-testid="total-field">
            { expenses.length !== 0 ? totalExpended : initialExpense }
          </h6>
          <h6 data-testid="header-currency-field">{ currency }</h6>
          <h6 data-testid="email-field">
            { email }
          </h6>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpended: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.array).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpended: state.wallet.totalExpenses,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
