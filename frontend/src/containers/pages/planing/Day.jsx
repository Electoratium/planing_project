import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskTable from '../TaskTable';

class Day extends Component {
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
  return {};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Day);
