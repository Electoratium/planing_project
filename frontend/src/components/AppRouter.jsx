import React, { Component} from 'react';

import Header from './base/Header';
import Home from './pages/Home';
import Planing from './pages/Planing';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

import NotFound from './pages/NotFound';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class AppRouter extends Component {
    componentWillMount() {



        console.log('ff');


    };

    render () {
        return (
            <Router>
                <div className="container-fluid">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/planing/" component={Planing} />
                        <Route path="/login" component={Login} />
                        <Route path="/sign-up" component={SignUp} />


                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default AppRouter;

