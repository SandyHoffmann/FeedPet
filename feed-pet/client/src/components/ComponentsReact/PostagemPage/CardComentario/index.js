import "./styles.css"
export function CardComentario(props){
    return (
        <div class="card p-3">
        <div class="cardComentario">
            <div class="card">
                <img src="https://i.imgur.com/hczKIze.jpg" width="30" className="imgComentario"/>
            </div>
            <span>james_olesenn</span>
            <small>2 days ago</small>

        </div>
        <div class="comentario">
        <p>{props.conteudo} </p>
        </div>
        <div class="action d-flex justify-content-between mt-2 align-items-center">
            <div class="reply px-4"> <small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small> </div>
            <div class="icons align-items-center"> <i class="fa fa-star text-warning"></i> <i class="fa fa-check-circle-o check-icon"></i> </div>
        </div>
    </div>

    )
}