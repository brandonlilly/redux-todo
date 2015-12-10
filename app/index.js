import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-thunk';

import App from './components/App';
import reducer from './reducers';
import { addTodo } from './actions';


const logger = createLogger({
  collapsed: () => false,
  predicate: () => true,
});

const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(logger),
)(createStore);

const store = applyMiddleware(thunk, promise, logger)(createStore)(reducer);

store.dispatch(addTodo('go shopping'));
store.dispatch(addTodo('eat breakfast'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
