import React from 'react';
import './Form.css';
import ErrorLabel from './ErrorLabel.jsx';

export default class Field extends React.Component {
  state = {
    text: '',
    errorMessage: ''
  };

  _validUser = {
    firstname: 'james',
    lastname: 'bond',
    password: '007'
  };

  _errorMsgEmptyField = {
    firstname: 'Нужно указать имя',
    lastname: 'Нужно указать фамилию',
    password: 'Нужно указать пароль'
  };

  _errorMsgWrongValue = {
    firstname: 'Имя указано не верно',
    lastname: 'Фамилия указана не верно',
    password: 'Пароль указан не верно'
  };

  _currentText = '';

  check = () => {
    //console.log('check!');
    let errMsg = '';
    if (this._currentText === '') {
      errMsg = this._errorMsgEmptyField[this.props.name];
    }
    this.setState({ text: this._currentText, errorMessage: errMsg });
    return errMsg === '';
  };

  checkOnSubmit = () => {
    //console.log('checkOnSubmit!');
    if (!this.check()) {
      return false;
    }
    let errMsg = '';
    if (this._currentText !== this._validUser[this.props.name]) {
      errMsg = this._errorMsgWrongValue[this.props.name];
    }
    this.setState({ errorMessage: errMsg });
    return errMsg === '';
  };

  clearError = () => {
    //console.log('clearError');
    this.setState({ errorMessage: '' });
  };

  inputChangeHandler = e => {
    //console.log('onChange event');
    this._currentText = e.target.value.trim();
    this.check();
  };

  render() {
    return (
      <p className="field">
        <label className="field__label" htmlFor={this.props.name}>
          <span className="field-label">{this.props.caption}</span>
        </label>
        <input
          className={`field__input field-input t-input-${this.props.name}`}
          type="text"
          name={this.props.name}
          defaultValue=""
          onChange={this.inputChangeHandler}
        />
        <ErrorLabel
          name={this.props.name}
          errorMessageText={this.state.errorMessage}
        />
      </p>
    );
  }
}
