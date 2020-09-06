import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddlewate from 'redux-saga';
import { persistStore } from 'redux-persist';

import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddlewate();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart)

const persistor = persistStore(store);

export { store, persistor };