export default function Comment ({comment}){
    const {name, postId, email, body} = comment;
    const style = {
        border: '1px solid white',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }
    return(
        <div style={style}>
            <h4>Name: {name}</h4>
            <h5>Email: {email}</h5>
            <p>Description {body}</p>
        </div>
    )
}