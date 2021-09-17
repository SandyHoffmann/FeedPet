import img from "../../../../../assets/olho.jpg";
// import { LikesButtons } from "../Curtida";
import '../../../../PaginaAnimal/styles.css'
// import { ComentarioPost } from "../Comentario";

export function PostagemCard(props) {
    return(
        <div className="timeline-body">
        <div className="timeline-header">
          <span className="userimage">
            <img src={img} alt=""></img>
          </span>
          <span>{props.titulo}</span>
        </div>
        <div className="timeline-content">
          <p>
          {props.conteudo}
          </p>
        </div>
        <div className="timeline-likes">
          {/* <div className="stats-right">
            <span className="stats-text">259 Shares</span>
            <span className="stats-text">21 Comments</span>
          </div> */}
          <div className="stats">
            <span className="fa-stack fa-fw stats-icon">
              <i className="fa fa-circle fa-stack-2x text-danger"></i>
              <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
            </span>
            <span className="fa-stack fa-fw stats-icon">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
            </span>
            {/* <span className="stats-total">4.3k</span> */}
          </div>
        </div>
      {props.children}
      </div>

    );
}