import img from "../../../../assets/olho.jpg";
import { LikesButtons } from "../Curtida";
import "../../../PaginaAnimal/styles.css";
import "./styles.css";
import { ComentarioPost } from "../Comentario";
import { Link } from "react-router-dom";
import imgpost from "../../../../assets/icone1.png";
import imgperfil from "../../../../assets/amyperfil.jpg";
import "./styles.css";

export function PostagemCard(props) {
  return (
    <div className="profile-content">
      <div className="tab-content p-0">
        <div className="tab-pane fade active show" id="profile-post">
          <ul className="timeline">
          <li>

          <div className="timeline-time">
            <span className="date">today</span>
            <span className="time">07:20</span>
          </div>

          <div className="timeline-icon">
            <a href="javascript:;">&nbsp;</a>
          </div>
          <div className="timeline-body">
            <div className="timeline-header">
              <span className="userimage">
                <img src={img} alt=""></img>
              </span>
              <Link className="teste-link" to={`/perfil-usuario/${props.id_usuario}`}>
                <span className="username">{props.usuario.nome}</span>
              </Link>
              <span className="pull-right text-muted">34 Views</span>
            </div>
            <div className="timeline-content">
              <p>{props.titulo}</p>
              <p>{props.conteudo}</p>
            </div>
            <div className="timeline-likes">
              <div className="stats-right">
                <span className="stats-text">259 Shares</span>
                <span className="stats-text">21 Comments</span>
              </div>
              <div className="stats">
                <span className="fa-stack fa-fw stats-icon">
                  <i className="fa fa-circle fa-stack-2x text-danger"></i>
                  <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                </span>
                <span className="fa-stack fa-fw stats-icon">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                </span>
                <span className="stats-total">4.3k</span>
              </div>
            </div>
            <div className="timeline-footer">
              <a
                href="javascript:;"
                className="m-r-15 text-inverse-lighter"
                id="opcoes"
              >
                <LikesButtons id_postagem={props.id_post} />
              </a>
              <a
                href="javascript:;"
                className="m-r-15 text-inverse-lighter"
                id="opcoes"
              >
                <i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment
              </a>
              <a
                href="javascript:;"
                className="m-r-15 text-inverse-lighter"
                id="opcoes"
              >
                <i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share
              </a>
            </div>
            <div className="timeline-comment-box">
              <div className="input">
                  <ComentarioPost id_postagem={props.id_post} />
              </div>
            </div>
            </div>


         </li>

        </ul>
      </div>
    </div>
    </div>
  )};
