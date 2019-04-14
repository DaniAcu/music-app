import reducers from './reducers';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { setToken } from './User/actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(axios)))
);

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      Store.dispatch(setToken(''));
    }
    return error;
  }
);

export default Store;
