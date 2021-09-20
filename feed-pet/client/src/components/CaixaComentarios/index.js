import "./styles.css";

export function CaixaComentarios(props) {
    return (
        <div className="container-comentario">
            <img src={props.avatarUsuario} className="comentario-img"/>
            <div>
                <h2 className="comentario-nome">{props.nome}</h2>
                <p className="comentario-data">{props.dataComentario}</p>
            </div>
            <p className="comentario-conteudo">{props.comentario}</p>
        </div>
    );
}