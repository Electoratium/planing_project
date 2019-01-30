import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import PrivateRoute from './containers/PrivateRoute';

import Header from './components/base/Header';
import Footer from "./components/base/Footer";
import Home from './components/pages/Home';
import Planing from './components/pages/planing/Planing';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import NotFound from './components/pages/NotFound';


import loginActions from './actions/login';
import history from './history/history';
import {bindActionCreators} from "redux";



import CustomSnackBar from './components/CustomSnackBar';

class AppRouter extends Component {
    showDangerBar() {
        if(this.props.login.error) {
            return (
                <CustomSnackBar
                    message={this.props.login.error}
                />
            );
        }
    }
    componentDidMount() {
        this.props.onCheckToken();
    }

    render () {
        return (
            <Router history={history}>
                <div className="container-fluid">
                    <Header />

                    { this.showDangerBar()}

                    <Switch>
                        <Route path="/" exact component={Home} />
                         <PrivateRoute path="/planing" component={Planing} />
                            {/*<PrivateRoute path="/finance" component={Finance} />*/}
                        <Route path="/login" component={Login} />
                        <Route path="/sign-up" component={SignUp} />


                        <Route component={NotFound} />
                    </Switch>
                    <Footer/>
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

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        onCheckToken: () => loginActions.checkToken()
    }, dispatch)
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(AppRouter);