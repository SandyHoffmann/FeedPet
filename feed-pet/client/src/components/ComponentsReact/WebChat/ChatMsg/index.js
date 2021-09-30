export function ChatMsg(props) {
    return(
        <div className="chatMsg">
            <p className={props.className}>{props.mensagem.conteudo}</p>
        </div>
    )
}
