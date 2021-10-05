import "./styles.css"

export function ChatBox(props) {
    return (
        <div className="chatBox">
            <div className="container">
                <div className="card p-3">
                    <div className="flexContato">
                        <div className="flexContato__user">
                            <div className="image rounded" >
                            </div>
                            <div className="ml-3 w-100">

                                <p className="mb-0 mt-0 pchat" id={props.chat.id} onClick={props.onClick}>{props.chat.nome}</p>
                                <small className="mb-0 mt-0 pchat psmall">Ultima Mensagem</small>
                            </div>
                        </div>
                        <div className="ml-3 w-100">
                            <small className="mb-0 mt-0 chatHorario psmall">Horario</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
