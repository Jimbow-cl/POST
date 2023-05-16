
function Post(props) {


    return (
        <div className="post">
            <h1>{props.title}</h1>
            <h3> Auteur: {props.author}</h3>
            <p>{props.content}</p>
            <button id={props.index} onClick={props.likePlus}  >{props.likes} Like(s)</button>

        </div>
    )

}

export default Post