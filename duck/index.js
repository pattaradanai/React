import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { reducer as formReducer } from 'redux-form'

import app, { watchAppSaga } from './app'
const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  form: formReducer,
  app,
})

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

function* rootSaga() {
  yield all([watchAppSaga()])
}

sagaMiddleware.run(rootSaga)

export default store
