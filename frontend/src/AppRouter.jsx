import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PrivateRoute from './containers/PrivateRoute';
import Header from './components/base/Header';
import Footer from './components/base/Footer';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import SnackBar from './components/SnackBar';
import Day from './containers/pages/planing/Day';
import Week from './containers/pages/planing/Week';
import Month from './containers/pages/planing/Month';
import Year from './containers/pages/planing/Year';
import Projects from './containers/pages/planing/Projects';
import NotFound from './components/pages/NotFound';
import loginActions from './actions/login';
import history from './history/history';



class AppRouter extends Component {
  componentWillMount() {
    this.props.onCheckToken();
  }

  showDangerBar() {
    if (this.props.login.error) {
      return (
        <SnackBar
          message={this.props.login.error}
        />
      );
    }
  }

  render() {
    return (
      <Router history={history}>
        <div className="container-fluid">
          <Header />
          { this.showDangerBar()}
          <Switch>
            <Route path="/" exact component={Home} />

            {/*<PrivateRoute*/}
              {/*exact*/}
              {/*path="/planing"*/}
              {/*component={*/}
                {/*<Redirect to="/planing/day" />*/}
                                {/*}*/}
            {/*/>*/}
            {/*<PrivateRoute*/}
              {/*path="/planing/day"*/}
              {/*component={Drawer}*/}
              {/*componentProps={*/}
                                    {/*{*/}
                                      {/*ContentComponent: Day,*/}
                                    {/*}*/}
                                {/*}*/}
            {/*/>*/}
            {/*<PrivateRoute*/}
              {/*path="/planing/week"*/}
              {/*component={Drawer}*/}
              {/*componentProps={*/}
                                    {/*{*/}
                                      {/*ContentComponent: Week,*/}
                                    {/*}*/}
                                {/*}*/}
            {/*/>*/}
            {/*<PrivateRoute*/}
              {/*path="/planing/month"*/}
              {/*component={Drawer}*/}
              {/*componentProps={*/}
                                    {/*{*/}
                                      {/*ContentComponent: Month,*/}
                                    {/*}*/}
                                {/*}*/}
            {/*/>*/}
            {/*<PrivateRoute*/}
              {/*path="/planing/year"*/}
              {/*component={Drawer}*/}
              {/*componentProps={*/}
                                    {/*{*/}
                                      {/*ContentComponent: Year,*/}
                                    {/*}*/}
                                {/*}*/}
            {/*/>*/}
            {/*<PrivateRoute*/}
              {/*path="/planing/projects"*/}
              {/*component={Drawer}*/}
              {/*componentProps={*/}
                                    {/*{*/}
                                      {/*ContentComponent: Projects,*/}
                                    {/*}*/}
                                {/*}*/}
            {/*/>*/}

            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />

            <Route component={NotFound} />
          </Switch>
          {/*<Footer />*/}
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    onCheckToken: () => loginActions.checkToken(),
  }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(AppRouter);
