// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
//
// import rootReducer from './reducers/index'
//
// export default createStore(rootReducer, {}, applyMiddleware(thunk))
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

window.store = store;
export default store;