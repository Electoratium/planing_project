import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDay } from '../../../actions/planing';
import TaskTable from '../TaskTable';

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
}

Day.propTypes = {
  fetchDay: PropTypes.func,
  planing: PropTypes.array,
};

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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Day);
