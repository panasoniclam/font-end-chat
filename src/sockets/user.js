import {actionTest } from './../actions/index'
export default  (dispatch,response,key)=>{
    switch(key){
        case "connect":
            console.log("dispatch from socket")
            dispatch(actionTest)
    }
}