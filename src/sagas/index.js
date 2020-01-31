import { call, put, takeEvery, takeLatest,select ,take} from 'redux-saga/effects'
import * as TYPE from './../contands/index'
import sendFile from  './sendFile'
 function* startSaga(){
    console.log('start saga')
    yield put({type:TYPE.TEST})
    yield call(sendFile,"ahihi")
}
function *Logger(payload){
    //call truyen function va paramater
        yield call(sendFile,payload)
        yield put({type:TYPE.TEST})
}
function * helloSaga( ){
    // yield takeEvery('*',Logger)
    console.log("hello saga")
}
function * testSaga(){
   yield console.log("test saga")
}
export default function* rootSaga(){
    yield  takeEvery(TYPE.TEST,testSaga)
    yield   takeEvery(TYPE.SAGA,startSaga)
    
}

 