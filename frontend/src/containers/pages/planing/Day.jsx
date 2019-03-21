import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDay } from '../../../actions/planing';
import TaskList from '../../../components/TaskList';

<<<<<<< HEAD
class Day extends React.Component {
  constructor(props) {
    super(props);
    props.fetchDay();
  }

  render() {
    const { planing: rows } = this.props;
    return (
      <section>
        <div className="row">
          <div className="col-xs-12 col-lg-6" />
          <div className="col-xs-12 col-lg-6">
            <TaskTable rows={rows} />
          </div>
        </div>
      </section>
    );
  }
=======
class Day extends Component {
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
>>>>>>> 9ac2862d84c98d2181c2b0d28f754122f33114f4
}

Day.propTypes = {
  fetchDay: PropTypes.func,
  planing: PropTypes.array,
};

<<<<<<< HEAD
function mapStateToProps({ planing: { dayPlanning } }) {
  console.log(dayPlanning);
  return {
    planing: dayPlanning,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchDay,
    },
    dispatch,
  );
=======
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
>>>>>>> 9ac2862d84c98d2181c2b0d28f754122f33114f4
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Day);
