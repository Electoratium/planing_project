import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDay } from '../../../actions/planing';
import TaskList from '../../../components/TaskList';


class Day extends Component {

	constructor(props) {
		super(props);

		const {login, fetchDay} = this.props;
		const {userId} = login;

		fetchDay(userId);

		//тут все запросы А НЕ В COMPONENTWILLMOUNT
	}
	render() {
		let {tasks} = this.props.planing;
		return (
			<section>
				<div className="row">
					<div className="col-xs-12 col-lg-6" />
					<div className="col-xs-12 col-lg-6">
						<TaskList tasks={tasks}/>
					</div>
				</div>
			</section>
		);
	}
}

Day.propTypes = {
  fetchDay: PropTypes.func,
  planing: PropTypes.object,
};


function mapStateToProps(state) {
	return {
		login: state.login,
		planing: state.planing,
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchDay: (userId) => fetchDay(userId),
	}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Day);
