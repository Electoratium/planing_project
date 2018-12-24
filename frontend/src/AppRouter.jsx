import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';

import PrivateRoute from './containers/PrivateRoute';

import Header from './components/base/Header';
import Home from './components/pages/Home';
import Planing from './components/pages/Planing';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import NotFound from './components/pages/NotFound';


import store from './store';

import {loginActions} from './actions/login';


class AppRouter extends Component {
    componentDidMount() {
        loginActions.checkToken();
    }

    render () {
        return (
            <Provider store={store}>
                <Router>
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
            </Provider>
        );
    }
}

export default AppRouter;

