const   setupSocket =  (dispatch) =>{
    const socket = new WebSocket('ws://42.116.254.246:3000/websocket')
    console.log(socket)
}
export default setupSocket