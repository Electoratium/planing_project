import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const _PrivateRoute = ({ component: Component, ...rest }) => <Route {...rest} render={props => (rest.login.email ? <Component {...props} /> : <Redirect to="/login" />)} />;


function mapStateToProps(state) {
	return {
		login: state.login,
	};
}

const PrivateRoute = connect(
	mapStateToProps,
)(_PrivateRoute);


export default PrivateRoute;
