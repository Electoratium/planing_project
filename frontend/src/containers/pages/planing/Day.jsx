import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import '../../../styles/Day.css';

class Day extends Component {
	render () {
		return (
			<section className="container">
				<div className="row">
					<div className="col-lg-6">
						Chart goes here
					</div>
					<div className="col-lg-6">






						<TaskTable />






					</div>
				</div>
			</section>
		);
	}
}


function mapStateToProps(state) {
	return {}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Day);