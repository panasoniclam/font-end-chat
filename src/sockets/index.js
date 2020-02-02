import user from  './'
const setupSocket = dispatch =>{
    const socket = new WebSocket('ws://42.116.254.246:3000/websocket')
    socket.onopen = ()=>{
        socket.send(JSON.stringify({
            msg:'connect',
            version:'1',
            support:['1']
        }))
    }
    socket.onmessage = async e=>{
        let response = JSON.parse(e.data)
        switch(response.msg){
            case 'ping':
                socket.send(JSON.stringify({
                    msg:'pong'
                }))
            case 'connected':
                socket.send(JSON.stringify({
                    msg:'method',
                    method:'login',
                    id:'login-rocket',
                    params:[{resume:'h8ZASKqBBVB5VCiQ0VHvnDd6ekwqEgJAT15kkuHW61D'}]
                }))
                break ;
            case 'added':
                 switch(response.collection){
                     case 'users':
                        
                         user(dispatch,response.msg,response)
                         dispatch(actionSuntream(response))
                         break
                 }

                 
                user(dispatch,response.msg,response)
                break;
            case 'result':
                console.log(response.msg)
                user(dispatch,response.msg,response)
                break;
            

        }
    }
}
export default setupSocket