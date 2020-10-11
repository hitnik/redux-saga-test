import { applyMiddleware, createStore } from 'redux';
import rootReducer from "./reducers/root";
import createSagaMiddleware from 'redux-saga';
import watchFetchDog from './sagas/dogSaga';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchDog);

export default  store; 