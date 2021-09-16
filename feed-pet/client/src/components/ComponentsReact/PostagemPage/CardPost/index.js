export function PostagemCard(props) {
    return(
        <div className="corpoPostagem">
            <h1>{props.titulo}</h1>
            <p>{props.conteudo}</p>
        </div>
    );
}