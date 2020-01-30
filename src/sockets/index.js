import user from './user'
const   setupSocket =  (dispatch) =>{
    const socket = new WebSocket('ws://42.116.254.246:3000/websocket')
    socket.onopen = ()=>{
        socket.send(JSON.stringify({
            message:"connect",
            version:'1',
            support:['1']
        }))
    }
    socket.onmessage = async e =>{
       await user(dispatch,e,"")
    }
}
export default setupSocket