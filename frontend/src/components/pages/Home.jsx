import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';


import Footer from '../base/Footer';


class Home extends Component {
    // showCars () {
    //     return this.props.cars.map( car => {
    //         return (
    //             <li  key={car.id}>{car.name}</li>
    //         );
    //     });
    // }

    render() {
        return (
            <div>
                <ul>
                    {/*{this.showCars()}*/}
                </ul>
                <p>Home page</p>

                <Footer />
            </div>
        );
    }
}

//
// function mapStateToProps(state) {
//     return {
//     }
// }
//
// function matchDispatchToProps(dispatch) {
//         return bindActionCreators({
//         }, dispatch)
// }
//
// export default connect(mapStateToProps)(Home);



export default Home;