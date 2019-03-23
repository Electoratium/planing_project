import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDay } from '../../../actions/planing';
import TaskList from '../../../components/TaskList';

class Day extends Component {

	constructor(props) {
		super(props);



		//тут все запросы А НЕ В COMPONENTWILLMOUNT
	}






	componentWillMount() {
		const {userId} = this.props.login;
		this.props.fetchDay(userId);
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
