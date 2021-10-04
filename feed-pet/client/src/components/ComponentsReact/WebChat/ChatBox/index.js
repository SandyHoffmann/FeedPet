import "./styles.css"

export function ChatBox(props) {
    return (
        <div className="chatBox" onClick={props.onClick}>
            <div className="container mt-1 d-flex">
                <div className="card p-3">
                    <div className="d-flex">
                        <div className="d-flex image rounded" >
                        </div>
                        <div className="ml-3 w-100">
                            <p className="mb-0 mt-0 pchat" id={props.chat.id}>{props.chat.nome}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
