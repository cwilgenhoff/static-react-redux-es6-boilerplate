import React from 'react';
import { Provider } from 'react-redux';
import App from '../containers/App';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Root;
