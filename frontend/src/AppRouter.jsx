import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router';
import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './containers/PrivateRoute';
import Header from './components/base/Header';
import Footer from "./components/base/Footer";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import CustomSnackBar from './components/CustomSnackBar';
import ResponsiveDrawer from "./components/CustomDrawer";
import Day from "./containers/pages/planing/Day";
import Week from "./containers/pages/planing/Week";
import Month from "./containers/pages/planing/Month";
import Year from "./containers/pages/planing/Year";
import Projects from "./containers/pages/planing/Projects";
import NotFound from './components/pages/NotFound';
import loginActions from './actions/login';
import history from './history/history';
import {bindActionCreators} from "redux";






class AppRouter extends Component {
	componentWillMount() {
		this.props.onCheckToken()
	}

	showDangerBar() {
        if(this.props.login.error) {
            return (
                <CustomSnackBar
                    message={this.props.login.error}
                />
            );
        }
    }
    render () {
        return (
            <Router history={history}>
                <div className="container-fluid">
                    <Header />
                    { this.showDangerBar()}
                        <Switch>
                            <Route path="/" exact component={Home} />

                            <PrivateRoute
                                exact path="/planing"
                                component={
                                	<Redirect to="/planing/day" />
                                }
                            />
                            <PrivateRoute
                                path="/planing/day"
                                component={ResponsiveDrawer}
                                componentProps={
                                    {
                                        ContentComponent: Day
                                    }
                                }
                            />
                            <PrivateRoute
                                path="/planing/week"
                                component={ResponsiveDrawer}
                                componentProps={
                                    {
                                        ContentComponent: Week
                                    }
                                }
                            />
                            <PrivateRoute
                                path="/planing/month"
                                component={ResponsiveDrawer}
                                componentProps={
                                    {
                                        ContentComponent: Month
                                    }
                                }
                            />
                            <PrivateRoute
                                path="/planing/year"
                                component={ResponsiveDrawer}
                                componentProps={
                                    {
                                        ContentComponent: Year
                                    }
                                }
                            />
                            <PrivateRoute
                                path="/planing/projects"
                                component={ResponsiveDrawer}
                                componentProps={
                                    {
                                        ContentComponent: Projects
                                    }
                                }
                            />

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