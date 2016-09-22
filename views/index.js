import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

window.reduxStore = configureStore();

render((
  <Root store={window.reduxStore} />
  ),
  document.getElementById('app'));
