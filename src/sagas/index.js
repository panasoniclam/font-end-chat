import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as TYPE from './../contands/index'
export function* startSaga(){
    console.log('hello saga')
}
console.log("lplppl")
export default function* rootSaga(){
    yield  takeEvery(TYPE.TEST,startSaga)
}

 