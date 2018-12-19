import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk, createLogger({}))
));

export default store;