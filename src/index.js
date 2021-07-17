// library
import React from 'react';
import ReactDOM from 'react-dom';

// import
import './index.css';

// Component
import App from './App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/minion';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
