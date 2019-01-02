import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';


import { ValidatorForm } from 'react-form-validator-core';
import LoginField from '../../components/LoginField';

// import {bindActionCreators} from 'redux';


import {loginActions} from '../../actions/login';



class LoginForm extends Component {
    handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.emailInput.value,
            password: this.pswrdInput.value,
            isChecked: this.isSaveLoginCheckbox.checked
        };


        this.props.onLogin(userData);


        // this.cleanLoginForm();
    }
    cleanLoginForm() {
        this.emailInput.value = '';
        this.pswrdInput.value = '';
        this.isSaveLoginCheckbox.checked = false;
    }



    render() {
        if(this.props.login.status === 'CONFIRM') {
            return <Redirect to="/planing" />
        }
        return (
            <ValidatorForm className="form-signin" onSubmit={this.handleSubmit}>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Вход</h1>
                </div>
                {/*<div className="form-label-group">*/}
                    {/*<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" ref={ input => this.emailInput = input } />*/}
                    {/*<label htmlFor="inputEmail">Email *</label>*/}
                {/*</div>*/}
                <LoginField
                    inputId="inputEmail"
                    type="email"
                    name="email"
                    validators={['required', 'isEmail', 'maxStringLength: 45']}
                    errorMessages={['Это обязательное поле', 'Необходимо ввести email', 'Максимальная длинна email - 45 символов']}
                    labelText="Email *"
                />

                {/*<div className="form-label-group">*/}
                    {/*<input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" ref={ input => this.pswrdInput = input } />*/}
                <LoginField
                    inputId="inputPassword"
                    type="password"
                    name="password"
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
            // <form className="form-signin" onSubmit={ e => this.handleSubmit(e)}>

            // </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}



// function matchDispatchToProps (dispatch) {
//     return bindActionCreators({select: select}, dispatch)
// }

export default connect(
    mapStateToProps,
    dispatch => ({
        onLogin: loginData => dispatch(loginActions.login(loginData))

    })
)(LoginForm);