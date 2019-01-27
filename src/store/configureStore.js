import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middleware = [];

if (process.env.NODE_ENV !== 'production') {
  let loggerMiddleware = createLogger();
  middleware = [...middleware, thunkMiddleware, loggerMiddleware];
}

export default reducer => {
  return createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
};
