import * as TYPE from  './../contands/index'
const initialzation  =  {
    lam:'react-redux',
    a:'',
    b:'',
    result:'',
    saga:"hello  "
}
export default (state=initialzation,action ) =>{
    switch(action.type){
        case TYPE.TEST:
         return {
             ...state,
             lam: action.payload
         } 
        case TYPE.ADD:
            return {
                ...state,
                a:parseInt(action.payload.a),
                b:parseInt(action.payload.b),
                result:state.a+state.b
            }
        case TYPE.SAGA:
            return {
                ...state,
                saga:"hello lamn8"

            }
        
    }
    return state
}