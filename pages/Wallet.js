import React from 'react';
import { connect } from 'react-redux';
import ExpensesForms from '../components/ExpensesForms';
// import PropTypes from 'prop-types';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpensesForms />
        <Table />
      </>
    );
  }
}

export default connect()(Wallet);
