import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';


import { ValidatorForm } from 'react-form-validator-core';
import LoginField from '../../components/LoginField';

import {bindActionCreators} from 'redux';


import {loginActions} from '../../actions/login';



class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = (e)  => {
        e.preventDefault();


        const userData = {
            email: this.state.email,
            password: this.state.password,
            isChecked: this.isSaveLoginCheckbox.checked
        };


        this.props.onLogin(userData);



        // this.cleanLoginForm();
    }
    onChangeInput = (e, name) => {
        const value = e.currentTarget.value;
        this.setState({[name]: value});
   }


    cleanLoginForm = () => {
        this.emailInput.value = '';
        this.pswrdInput.value = '';
        this.isSaveLoginCheckbox.checked = false;
    }



    render() {
        if(this.props.login.status === 'CONFIRM') {
            return <Redirect to="/planing" />
        }
        return (
            <ValidatorForm className="form-signin" onSubmit={this.handleSubmit} ref="form">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Вход</h1>
                </div>

                <LoginField
                    inputId="inputEmail"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={event => this.onChangeInput(event, 'email')}
                    validators={['required', 'isEmail', 'maxStringLength: 45']}
                    errorMessages={['Это обязательное поле', 'Необходимо ввести email', 'Максимальная длинна email - 45 символов']}
                    labelText="Email *"
                />

                <LoginField
                    inputId="inputPassword"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={event => this.onChangeInput(event, 'password')}
                    validators={['required', 'minStringLength:6', 'maxStringLength: 30']}
                    errorMessages={['Это обязательное поле', 'Необходимо минимум 6 символов', 'Максимальная длинна пароля - 30']}
                    labelText="Пароль *"
                />

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" ref={ checkbox => this.isSaveLoginCheckbox = checkbox} /> Запомнить меня
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
            </ValidatorForm>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}


function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        onLogin: loginData => dispatch(loginActions.login(loginData))
    }, dispatch)
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(LoginForm);