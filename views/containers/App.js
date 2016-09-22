import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render = () => {
    return (
      <h1>Hello World</h1>
    );
  }
}

Agenda.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

const mapStateToProps = (store) => {
  return {
  };
};

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Agenda);

export default connectedApp;
