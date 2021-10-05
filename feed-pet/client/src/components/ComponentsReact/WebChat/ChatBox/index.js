import "./styles.css"
const moment = require('moment'); 
export function ChatBox(props) {
    moment.locale('pt-br');
    let data = props.chat.ultimaMsg?.createdAt
    let tempo = moment(data).format('YYYY-MM-DD HH:mm:ss')
    let ultimaMsgCort = props.chat.ultimaMsg?.conteudo.slice(0,20)
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
                                <small className="mb-0 mt-0 pchat psmall">{props.chat.ultimaMsg?.conteudo.length>20?ultimaMsgCort+'...':ultimaMsgCort}</small>
                            </div>
                        </div>
                        <div className="ml-3 w-100">
                            <small className="mb-0 mt-0 chatHorario psmall">{tempo}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
