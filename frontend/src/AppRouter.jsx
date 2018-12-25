import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import PrivateRoute from './containers/PrivateRoute';

import Header from './components/base/Header';
import Home from './components/pages/Home';
import Planing from './components/pages/Planing';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import NotFound from './components/pages/NotFound';


import {loginActions} from './actions/login';


class AppRouter extends Component {
    componentDidMount() {
        // loginActions.checkToken();
        this.props.onCheckToken();

        // async -> просто обертка, которая возвращает промис из ф-ии
        // async function hello() {
        //     const data = await Axios.post('http://127.0.0.1:8000/api/v1/check-token', {'token': '9b2a50805819972f208b73b9620c5025da0e6348'});
        //
        //     //АСИНХРОННО!!!! но в тоже время как бы синхронно!!!!!!!!!
        //     let [data1, data2] = await Promise.all([
        //         Axios.post('http://127.0.0.1:8000/api/v1/check-token', {'token': '9b2a50805819972f208b73b9620c5025da0e6348'}),
        //         Axios.post('http://127.0.0.1:8000/api/v1/check-token', {'token': '9b2a50805819972f208b73b9620c5025da0e6348'})
        //     ]);
        //
        //     // console.log(datas);
        //     //
        //
        //
        //     return [data1, data2];
        // }
        //
        // hello().then(data => console.log(data));

    }

    render () {
        return (
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
        );
    }
}


function mapStateToProps(state) {
    return {
        login: state.login
    };
}
export default connect(mapStateToProps, dispatch => ({
    onCheckToken: () => {
         dispatch(loginActions.checkToken());
    }

}))(AppRouter);


