import React, { Component } from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import LoginField from '../../components/LoginField';
// import { ValidatorForm } from 'react-form-validator-core';
// import InputValidate from '../../components/InputValidate';

class SignUpForm extends Component {
  state = {
    name: '',
    surname: '',
    email: '',
    password: ''
  };

  onChangeInput = (e, name) => {
    const value = e.currentTarget.value;
    this.setState({[name]: value})
  };

  handleSubmit = () => {
    console.log('pres button submit');
  };

  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <ul>
              <li><h5>do something later</h5></li>
              <li><h4>do it</h4></li>
              <li><h3>just do it</h3></li>
            </ul>
          </div>
          <div className="col">
            <ValidatorForm className="form-signin" onSubmit={this.handleSubmit} ref="form">
              <LoginField
                inputId = "inputName"
                type = "text"
                name = "name"
                value = {this.state.name}
                onChange = {event => this.onChangeInput(event, 'name')}
                validators = {['required', 'isString', 'minStringLength: 3', 'maxStringLength: 45', 'trim']}
                errorMessages = {['This field is required', 'Must be string', 'Min length 3', 'Max length 45']}
                labelText = "Name *"
              />
              <LoginField
                inputId = "inputSurname"
                type = "text"
                name = "surname"
                value = {this.state.surname}
                onChange = {event => this.onChangeInput(event, 'surname')}
                validators = {['required', 'isString', 'minStringLength: 3', 'maxStringLength: 45',  'trim']}
                errorMessages = {['This field is required', 'Must be string', 'Min length 3', 'Max length 45']}
                labelText = "Surname *"
              />

              <LoginField
                inputId="inputEmail"
                type="email"
                name="email"
                value={this.state.email}
                onChange={event => this.onChangeInput(event, 'email')}
                validators={['required', 'isEmail', 'maxStringLength: 45']}
                errorMessages={['This field is required', 'Необходимо ввести email', 'Максимальная длинна email - 45 символов']}
                labelText="Email *"
              />

              <LoginField
                inputId="inputPassword"
                type="password"
                name="password"
                value={this.state.password}
                onChange={event => this.onChangeInput(event, 'password')}
                validators={['required', 'minStringLength:6', 'maxStringLength: 30']}
                errorMessages={['This field is required', 'Необходимо минимум 6 символов', 'Максимальная длинна пароля - 30']}
                labelText="Password *"
              />

              <button className="btn btn-lg btn-primary btn-block">Sign up</button>

            </ValidatorForm>

          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
