import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDay } from '../../../actions/planing';
import TaskTable from '../TaskTable';

class Day extends Component {
	componentWillMount() {
		this.props.fetchDay();
	}
	render() {
		return (
			<section>
				<div className="row">
					<div className="col-xs-12 col-lg-6">

					</div>
					<div className="col-xs-12 col-lg-6">
						<TaskTable />
					</div>
				</div>
			</section>
		);
	}
}


function mapStateToProps(state) {
	return {
		planing: state.planing
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchDay
	}, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Day);
