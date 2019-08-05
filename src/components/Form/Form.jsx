import React from 'react';
import './Form.css';
import Field from './Field.jsx';
import logo from './assets/bond_approve.jpg'; // relative path to image

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { validUser: false };

    this.inputFirstname = React.createRef();
    this.inputLastname = React.createRef();
    this.inputPassword = React.createRef();
  }

  submitHandler = e => {
    e.preventDefault();

    let firstnameValid = this.inputFirstname.current.checkOnSubmit();
    let lastnameValid = this.inputLastname.current.checkOnSubmit();
    let passwordValid = this.inputPassword.current.checkOnSubmit();

    this.setState({
      validUser: firstnameValid && lastnameValid && passwordValid
    });
  };

  keyPressHandler = e => {
    if (e.target.tagName === 'INPUT') {
      this.inputFirstname.current.clearError();
      this.inputLastname.current.clearError();
      this.inputPassword.current.clearError();
    }
  };

  render() {
    if (this.state.validUser) {
      return <img src={logo} alt="bond" className="t-bond-image" />;
    }

    return (
      <div className="app-container">
        <form
          className="form"
          onSubmit={this.submitHandler}
          onKeyPress={this.keyPressHandler}
        >
          <h1>Введите свои данные, агент</h1>
          <Field name="firstname" caption="Имя" ref={this.inputFirstname} />
          <Field name="lastname" caption="Фамилия" ref={this.inputLastname} />
          <Field name="password" caption="Пароль" ref={this.inputPassword} />
          <div className="form__buttons">
            <input
              type="submit"
              className="button t-submit"
              value="Проверить"
            />
          </div>
        </form>
      </div>
    );
  }
}
