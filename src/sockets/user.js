import {actionTest } from './../actions/index'
export default  (dispatch,response,key)=>{
    switch(key){
        case "connect":
            dispatch(actionTest)
    }
}