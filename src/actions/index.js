import * as TYPE from  './../contands/index'
export const actionTest  = payload =>  {

    return {
        type:TYPE.TEST,
        payload
    }
}