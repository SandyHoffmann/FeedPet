import "./styles.css"

export function NotFound(props){
    return(
        <div className="corpoNotFound">
            <h1>{props.titulo}</h1>
            <img src={props.img}></img>
        </div>
    )
}