import * as TYPE from  './../contands/index'
const initialzation  =  {
    lam:'react-redux'
}
export default (state=initialzation,action ) =>{
    switch(action.type){
        case TYPE.TEST:
         return {
             ...state,
             lam: action.payload
         } 
         
   
    }
    return state
}