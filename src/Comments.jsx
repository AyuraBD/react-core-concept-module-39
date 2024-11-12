import { useEffect, useState } from "react"
import Comment from "./Comment";

export default function Commnet (){
    const [comments, setCommnets] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments/')
        .then(res => res.json())
        .then(data => setCommnets(data))
    },[])
    return (
        <div>
            <h3>Comments: {comments.length}</h3>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}