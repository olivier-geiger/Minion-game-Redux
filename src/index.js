// Librairies
import React from 'react';
import ReactDOM from 'react-dom';

// import
import './index.css';

// Composant
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import minionsReducer from './store/reducers/minions';
import saveReducer from './store/reducers/save';

// Combine les reducers
const reducer = combineReducers({
  minion: minionsReducer,
  save: saveReducer
});

// Middleware
const middleware = store => {
  return next => {
    return action => {
      console.log(action)
      return next(action)
    }
  }
}

// redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store
const store = createStore(reducer, composeEnhancers(applyMiddleware(middleware, thunk)));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
