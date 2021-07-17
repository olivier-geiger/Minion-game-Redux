// Librairies
import React from 'react';
import ReactDOM from 'react-dom';

// import
import './index.css';

// Composant
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import minionsReducer from './store/reducers/minions';
import saveReducer from './store/reducers/save';

// Combine les reducers
const reducer = combineReducers({
  minion: minionsReducer,
  save: saveReducer
});

// store
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
