import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Month extends Component {
  render() {
    return (
      <h1>Hell I am month!!</h1>
    );
  }
}


function mapStateToProps(state) {
  return {

  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Month);
