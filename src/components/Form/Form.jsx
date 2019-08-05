import React from 'react';
import './Form.css';
import Field from './Field.jsx';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.inputFirstname = React.createRef();
    this.inputLastname = React.createRef();
    this.inputPassword = React.createRef();
  }

  submitHandler = e => {
    e.preventDefault();

    this.inputFirstname.current.check();
    this.inputLastname.current.check();
    this.inputPassword.current.check();
  };

  keyPressHandler = e => {
    if (e.target.tagName === 'INPUT') {
      this.inputFirstname.current.clearError();
      this.inputLastname.current.clearError();
      this.inputPassword.current.clearError();
    }
  };

  render() {
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
