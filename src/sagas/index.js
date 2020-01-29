import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as TYPE from './../contands/index'
function *startSaga(){
    console.log('hello saga')
}
function *  watchSaga(){
    yield  takeEvery(TYPE.TEST,startSaga )
   
}

export   {watchSaga}