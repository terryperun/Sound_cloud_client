import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream/index';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const tracks = [
  {
    title: 'Some track',
  },
  {
    title: 'Some ather track',
  },
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
