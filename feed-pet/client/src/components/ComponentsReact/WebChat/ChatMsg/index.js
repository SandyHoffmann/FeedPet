import "./styles.css"
export function ChatMsg(props) {
    return(
        <>
        <div className={"chatMsg-"+props.className+" msgChatCont"}>
            <p className={props.className+" chatmsg"}>{props.mensagem.conteudo}</p>
        </div>
        {props.nome&&<small className="nomeMsgChat">{props.nome.length<10&&props.nome||props.nome.slice(0,10)+"..."}</small>}
        </>
    )
}
