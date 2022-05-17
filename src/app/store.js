import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import userReducer from '../features/ducks/user';
import { watcherSaga } from '../features/sagas/rootSaga';

const reducers = combineReducers({
	user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

// const middelwares = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;
