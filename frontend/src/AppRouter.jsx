import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import PrivateRoute from './containers/PrivateRoute';

import Header from './components/base/Header';
import Home from './components/pages/Home';
import Planing from './components/pages/Planing';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import NotFound from './components/pages/NotFound';


import {loginActions} from './actions/login';
import history from './history/history';



class AppRouter extends Component {
    componentDidMount() {
        // loginActions.checkToken();
        this.props.onCheckToken();
    }

    render () {
        return (
            <Router history={history}>
                <div className="container-fluid">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        {/*<Route path="/planing/" component={Planing} />*/}
                         <PrivateRoute path="/planing" component={Planing} />
                            {/*<PrivateRoute path="/finance" component={Finance} />*/}
                        <Route path="/login" component={Login} />
                        <Route path="/sign-up" component={SignUp} />


                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


function mapStateToProps(state) {
    return {
        login: state.login
    };
}
export default connect(mapStateToProps, dispatch => ({
    onCheckToken: () => dispatch(loginActions.checkToken())

}))(AppRouter);


