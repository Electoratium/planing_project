import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import {loginActions} from '../../actions/login';
import {bindActionCreators} from "redux";

class UserName extends Component {
    logout(e) {
        e.preventDefault();

        this.props.onLogout();
    }
    render() {
        if(this.props.login.userName) {
            return (
                    <li>
                        <Link to="/profile">{ this.props.login.userName}</Link> | <Link to="/" onClick={ e => this.logout(e)}>Logout</Link>
                    </li>
                );
        }
        return (
            <li>
                <Link to="/login">Login</Link> | <Link to="/sign-up">Sign Up</Link>;
            </li>
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
        onLogout: loginActions.logout
    }, dispatch)
}
export default connect(
    mapStateToProps,
    matchDispatchToProps
    //     dispatch => ({
    //     onLogout: () => dispatch(loginActions.logout())
    // })
)(UserName);