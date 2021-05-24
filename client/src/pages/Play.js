import React, {useState} from 'react';
import io from 'socket.io-client'
import queryString from 'query-string'

const Play = (props) => {

    const data = queryString.parse(props.location.search)

    const ENDPOINT = 'http://localhost:5000'
    //initialize socket state
    const [room, setRoom] = useState(data.roomCode)
    const [roomFull, setRoomFull] = useState(false)
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState('')
    const [gameOver, setGameOver] = useState(true)
    const [winner, setWinner] = useState('')

    useEffect(() => {
        const connectionOptions =  {
            "forceNew" : true,
            "reconnectionAttempts": "Infinity", 
            "timeout" : 10000,                  
            "transports" : ["websocket"]
        }
        socket = io.connect(ENDPOINT, connectionOptions)

        socket.emit('join', {room: room}, (error) => {
            if(error)
                setRoomFull(true)
        })

        //cleanup on component unmount
        return function cleanup() {
            socket.emit('disconnect')
            //shut down connnection instance
            socket.off()
        }
    }, [])


  return (
    <div className='main'>
      <h1>Play</h1>
    </div>
  );
};

export default Play;
