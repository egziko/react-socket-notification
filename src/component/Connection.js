import openSocket from "socket.io-client";


class Connection {
    constructor(url = 'http://localhost:85', rooms = ['task-list']) {
        this.rooms = rooms;
        this.url = url;
        this.connection = false;
    
    
        this.connect();
    }

    setConnection(conn) {
        this.connection = conn;
    }
    getConnection() {
        return this.connection
    }

    connect(remote = this.url, rooms = this.rooms) {            
        const io = openSocket(remote, {
            secure: true
        });
    
        if(this.rooms) {
            io.on("connect", () => {
                io.emit('room', rooms);
            });
        }
    
        this.setConnection(io);
        
    }


    listen(event, cb) {
        if(!this.connection)
            return new Error('WS not connected.');
    
        this.connection.on(event, cb);
    }


}


export default Connection