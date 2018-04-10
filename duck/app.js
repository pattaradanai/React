import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { Creator, createReducer } from './helper'

const APP_SET_CURRENT_USER = 'APP_SET_CURRENT_USER'
const LOGIN = 'LOGIN'

const setCurrentUser = Creator(APP_SET_CURRENT_USER, 'currentUser')

export const login = Creator(LOGIN)

function* sagaLogin(action) {
  try {
    const user = { firstname: 'Thanadej', lastname: 'Phadtong' }
    console.log('user', user)
    yield put(setCurrentUser(user))
  } catch (e) {
    console.log(e)
  }
}

export function* watchAppSaga() {
  yield takeLatest(LOGIN, sagaLogin)
}

const initialState = {
  currentUser: {},
}

export default createReducer(initialState, state => ({
  [APP_SET_CURRENT_USER]: ({ currentUser }) => ({ ...state, currentUser }),
}))
