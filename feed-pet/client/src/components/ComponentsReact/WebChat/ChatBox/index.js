export function ChatBox(props) {
    return(
        <div className="chatBox" onClick={props.onClick}>
            <h1 id={props.chat.id}>{props.chat.nome}</h1>
        </div>
    )
}
