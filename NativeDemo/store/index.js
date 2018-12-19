import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import reducers from '../reducers';
 
let middlewares = [thunk];
if (__DEV__ === true) {
    middlewares.push(createLogger({}));
}
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middlewares)
));

export default store;