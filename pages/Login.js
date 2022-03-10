import React from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import video from '../video/money.mp4';
import { USER } from '../actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disableButton: true,
  };

  handleChangeEmail = ({ target: { value } }) => {
    this.setState({
      email: value,
    });
  };

  handleChangePassword = ({ target: { value } }) => {
    this.setState({ password: value });
    const { email, password } = this.state;
    const PASSWORD_LENGTH = 5;
    if (email === 'alguem@email.com' && password.length >= PASSWORD_LENGTH) {
      this.setState({ disableButton: false });
    } else {
      this.setState({ disableButton: true });
    }
  };

  render() {
    const { email, password, disableButton } = this.state;
    const { dispatch, history } = this.props;

    return (
      <div
        style={ {
          display: 'flex', justifyContent: 'space-around', alignItems: 'center' } }
      >
        <video
          autoPlay="autoplay"
          preload="auto"
          muted
          loop
          controls=""
          id="bitcoinVideo"
        >
          <source src={ video } type="video/mp4" />
        </video>
        <div className="loginForm">
          <div>
            <h2
              style={ {
                color: 'green',
                alignContent: 'center' } }
            >
              TrybeWallet

            </h2>
          </div>
          <div
            style={ {
              display: 'flex',
              flexDirection: 'column',
              width: '70%',
            } }
          >
            <input
              value={ email }
              onChange={ this.handleChangeEmail }
              type="text"
              placeholder="teste@email.com"
              name="email-input"
              data-testid="email-input"
            />
            <input
              value={ password }
              onChange={ this.handleChangePassword }
              type="password"
              placeholder="password"
              name="password-input"
              data-testid="password-input"
            />
            <button
              disabled={ disableButton }
              type="button"
              style={ {
                color: 'grey',
              } }
              onClick={ () => {
                dispatch(USER(email));
                history.push('/carteira');
              } }
            >
              Entrar
            </button>
          </div>
        </div>
      </div>);
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
