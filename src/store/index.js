import { applyMiddleware, createStore } from 'redux';
import rootReducer from "./reducers/root";
import createSagaMiddleware from 'redux-saga';
import watchFetchDog from './sagas/dogSaga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), sagaMiddleware ];

const store = configureStore({
    reducer:rootReducer,
    middleware:middleware
  });


sagaMiddleware.run(watchFetchDog);

export default  store; 