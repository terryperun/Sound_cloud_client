import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some ather track'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Stream />,
  document.getElementById('root'));
registerServiceWorker();
