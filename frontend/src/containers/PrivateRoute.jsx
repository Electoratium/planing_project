import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const _PrivateRoute = ({ component: Component, componentProps = null, ...rest }) => <Route {...rest} render={props => (rest.login.email ? <Component {...props} {...componentProps} /> : <Redirect to="/login" />)} />;


function mapStateToProps(state) {
  return {
    login: state.login,
  };
}


_PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  componentProps: PropTypes.object.isRequired,
};

const PrivateRoute = connect(
  mapStateToProps,
)(_PrivateRoute);


export default PrivateRoute;
