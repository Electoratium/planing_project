import React, { Component } from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import LoginField from '../../components/LoginField';
import InputValidate from "../../components/InputValidate";
// import { ValidatorForm } from 'react-form-validator-core';
// import InputValidate from '../../components/InputValidate';

class SignUpForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  handleChange = (e, name) => {
    const value = e.currentTarget.value;
    this.setState({[name]: value});
  };

  handleSubmit = () => {
    console.log('pres button submit');
  };

  componentDidMount() {
    // custom rule
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });

    /*ValidatorForm.addValidationRule('isRepeatPasswordMatch',(value) => {
      if(value !== this.state.repeatPassword) {
        return false;
      }
      return true;
    });*/
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <ul>
              <li><h5>do something later</h5></li>
              <li><h4>do it</h4></li>
              <li><h3>just do it</h3></li>
              <li><h2>lift off</h2></li>
            </ul>
          </div>
          <div className="col">
            <ValidatorForm className="form-signin" onSubmit={this.handleSubmit} ref="form">
              <LoginField
                inputId="inputFirstName"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={event => this.handleChange(event, 'firstName')}
                validators={['required', 'isString', 'minStringLength: 3', 'maxStringLength: 45', 'trim']}
                errorMessages={['This field is required', 'Must be string', 'Min length 3', 'Max length 45']}
                labelText="First name *"
              />
              <LoginField
                inputId="inputLastName"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={event => this.handleChange(event, 'lastName')}
                validators={['required', 'isString', 'minStringLength: 3', 'maxStringLength: 45',  'trim']}
                errorMessages={['This field is required', 'Must be string', 'Min length 3', 'Max length 45']}
                labelText="Last name *"
              />
              <LoginField
                inputId="inputEmail"
                type="email"
                name="email"
                value={this.state.email}
                onChange={event => this.handleChange(event, 'email')}
                validators={['required', 'isEmail', 'maxStringLength: 45']}
                errorMessages={['This field is required', 'Email required', 'Maximum password length - 45']}
                labelText="Email *"
              />

              <LoginField
                inputId="inputPassword"
                type="password"
                name="password"
                value={this.state.password}
                onChange={event => this.handleChange(event, 'password')}
                validators={['required', 'minStringLength:6', 'maxStringLength: 30']}
                errorMessages={[
                  'This field is required',
                  'At least 6 characters required',
                  'Maximum password length - 30'
                ]}
                labelText="Password *"
              />

              <LoginField
                inputId="InputRepeatPassword"
                type="password"
                name="repeatPassword"
                value={this.state.repeatPassword}
                onChange={event => this.handleChange(event, 'repeatPassword')}
                validators={['required', 'isPasswordMatch', 'minStringLength:6', 'maxStringLength: 30']}
                errorMessages={[
                  'This field is required',
                  'Passwords don`t match',
                  'At least 6 characters required',
                  'Maximum password length - 30'
                ]}
                labelText="Repeat password *"
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
