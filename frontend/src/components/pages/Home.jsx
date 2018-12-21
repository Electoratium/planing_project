import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {car} from "../../actions/cars";


import Footer from '../base/Footer';


class Home extends Component {
    showCars () {
        return this.props.cars.map( (car) => {
            return (
                <li  key={car.id}>{car.name}</li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.showCars()}
                </ul>
                <p>Home page</p>

                <Footer />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

function matchDispatchToProps(dispatch) {
        return bindActionCreators({
            carAction: car
        }, dispatch)
}

export default connect(mapStateToProps)(Home);