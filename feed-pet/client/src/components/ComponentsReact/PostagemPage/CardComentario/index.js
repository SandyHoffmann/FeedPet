import "./styles.css"
import img from "../../../../assets/olho.jpg";
import { Link } from "react-router-dom";

export function CardComentario(props) {
    return (
        <>
            {/* <div className="card p-3">
                <div className="cabecalhoComentario">
                    <div>
                        <img className="rounded-circle" src={img} className="comentario-img" />
                    </div>
                    <div className="comentario-text">
                        <p className="comentario-nome">'aa'</p>
                        <div className="comentario">
                            <p>{props.conteudo} </p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div> */}
            <div className="card p-3">
                <div className="cardComentario">
                    <div className="card">
                        <img src="https://i.imgur.com/hczKIze.jpg" width="30" className="imgComentario" />
                    </div>
                    <Link to={`/perfil-usuario/${props.usuario.id}`}><span>{props.usuario.nome}</span></Link>
                    <small>2 days ago</small>

                </div>
                <div className="comentario">
                    <p>{props.conteudo} </p>
                </div>
                
            </div>
        </>
    )
}