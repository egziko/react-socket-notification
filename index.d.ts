// import Connection from "./src/component/Connection";

declare module 'react-socket-notification' {

    export function connect(): SocketIOClientStatic;
    
    
    export interface ListenCallback {
        (message: string)
    };
    
    export class Connection {
        /**
         * 
         * @param url Remote WS Server
         * @param rooms Rooms to join just after connection have been established
         */
        constructor(url?: string, rooms?: string[])
        getConnection(): SocketIOClientStatic;
        setConnection(connection: SocketIOClientStatic): void;
        listen(event: string, callback?: ListenCallback): void;
    }
    
    interface WTNotificationsProps {
        connection?: boolean;
        prop2?: string;
        prop3?: string;
    }
}


declare const WTNotifications: React.SFC<WTNotificationsProps>


export default WTNotifications;
