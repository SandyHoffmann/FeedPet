export function ChatMsg(props) {
    return(
        <div className={"chatMsg-"+props.className}>
            <p className={props.className+" chatmsg"}>{props.mensagem.conteudo}</p>
        </div>
    )
}
