import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

class UserName extends Component {
    logout(e) {
        e.preventDefault();

        this.props.onLogout();
    }
    render() {
        if(this.props.login.userName) {
            return (
                    <li>
                        <Link to="/profile">{ this.props.login.userName}</Link> | <a href="#" onClick={ e => this.logout(e)}>Logout</a>
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

export default connect(
    mapStateToProps,
    dispatch => ({
        onLogout: () => dispatch({type: 'LOGOUT'})
    })
)(UserName);