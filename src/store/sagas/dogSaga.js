import {put, call, takeEvery} from 'redux-saga/effects';
import {requestDog, requestDogSuccess, requestDogError, fetchDog} from '../actions'

function* fetchDogAsync() {
    try {
      yield put(requestDog());
      const data = yield call(() => {
        return fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
        }
      );
      yield put(requestDogSuccess(data));
    } catch (error) {
      yield put(requestDogError());
    }
  }


function* watchFetchDog() {
    yield takeEvery(fetchDog(), fetchDogAsync);
  }
  
  
export default watchFetchDog;