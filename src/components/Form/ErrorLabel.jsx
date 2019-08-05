import React from 'react';
import './Form.css';

export default props => (
  <span className={`field__error field-error t-error-${props.name}`}>
    {props.errorMessageText}
  </span>
);
