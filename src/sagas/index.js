import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as TYPE from './../contands/index'
export function* startSaga(){
    console.log('hello saga')
}
 
export default function* rootSaga(){
    yield  takeEvery(TYPE.TEST,startSaga)
 
}

 