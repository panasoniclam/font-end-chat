import * as TYPE from  './../contands/index'
export const actionTest  = payload =>  {
    console.log(payload)
    return {
        type:TYPE.TEST,
        payload
    }
}
export const actionAdd = payload =>({
    type:TYPE.ADD,
    payload
})
export const actionSaga = payload =>({
    type:TYPE.SAGA,
    payload
})