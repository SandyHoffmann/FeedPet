import { MdRemoveCircle } from "react-icons/md";
import "./styles.css"

export function ChatBoxEmail(props) {
    return(
        <div className="msg__email" key={props.key}>
            <p className="cardEmail">{props.email}</p>
            <button onClick={props.funcaoexcluir} id={props.id}>
                X
            </button>
        </div>
    )
}
