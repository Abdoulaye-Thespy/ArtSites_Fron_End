import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faMugHot } from '@fortawesome/free-solid-svg-icons';
import rootReducer from './reducers/index';
import App from './App';

import './index.css';

library.add(faCheckSquare, faMugHot);

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
