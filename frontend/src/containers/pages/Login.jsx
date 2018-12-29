import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

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
            <form className="form-signin" onSubmit={ e => this.handleSubmit(e)}>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Вход</h1>
                </div>
                <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" ref={ input => this.emailInput = input } />
                    <label htmlFor="inputEmail">Email *</label>
                    <div>
                        <small id="emailHelp" className="text-danger">
                            Вибраний email не існує
                        </small>
                    </div>
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" ref={ input => this.pswrdInput = input } />
                    <label htmlFor="inputPassword">Пароль *</label>
                    <div>
                        <small id="passwordHelp" className="text-danger">
                            Пароль не вірний
                        </small>
                    </div>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" ref={ checkbox => this.isSaveLoginCheckbox = checkbox} /> Запомнить меня
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
            </form>
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