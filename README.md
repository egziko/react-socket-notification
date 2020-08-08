# react-socket-notification

Make real time effects ? such as notifications, new posts update,  


## Demo

## Getting started

#### Install 
Install package from npm

`npm i react-socket-notifications`

## Usage

Render a message when an event is received

```javascript
import {SocketProvider, Connection} from "witrack-notifications" 


const App = () => (
    <SocketProvider url={'http://localhost:3000'}>
        <Event event={"post:new"}>
            <p>New posts available !</p>
            <button onClick={loadPosts}>Click to load new posts</button>
        </Event>
    </SocketProvider>
)
```


Manually handle events

```javascript
import {SocketProvider, withNotifications} from "witrack-notifications" 

const App = withNotifications(({postId}) => {

    const connection = useContext(SocketProvider.context);
    
    const [comments, setComments] = useState([]);
    const loadPosts = () => fetch(`/api/post/${postId}/comments`).then((response) => {
        const newComments = await res.json();
        setComments(newComments);
    });

    connection.listen('post:new').then(loadPosts);

    return (
        <div>
            {comments.map(comment => (
                <p>{comment.content}</p>
            ))}
        </div>
    )
});

```

