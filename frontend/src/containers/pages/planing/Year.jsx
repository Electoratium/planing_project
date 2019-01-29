import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";



class Year extends Component {




	render () {
		return (
			<h1>Hell I am year!!</h1>
		);
	}
}


function mapStateToProps(state) {
	return {

	}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Year);