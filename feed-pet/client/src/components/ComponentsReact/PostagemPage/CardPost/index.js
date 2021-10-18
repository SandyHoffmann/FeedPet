import { LikesButtons } from "../Curtida";
import "../../../PaginaAnimal/styles.css";
import "./styles.css";
import { ComentarioPost } from "../Comentario";
import { Link } from "react-router-dom";
import "./styles.css";
import { FiDelete } from "react-icons/fi";
import swal from 'sweetalert';
import { api } from "../../../../service";

const moment = require('moment'); 

export function PostagemCard(props) {
  moment.locale('pt-br');

  async function excluir(e){
    swal({
      title: "Você tem certeza?",
      text: "Sua postagem será deletada permanentemente!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        let deletar=await api.delete(`/postagens/${props.post?.id}`);
        swal("Postagem deletada com sucesso!", {
          icon: "success",
        }).then(async ()=>{
          console.log(props.posts)
          let posts = props.posts.filter(post => post.id !== props.post?.id)
          console.log(posts)
           props.setarPost(posts)
      });
      } else {
        swal("Ok, não deletamos sua postagem!");
      }
    });
  }
  console.log(props.usuario_logado)
  return (
    <div className="profile-content">
      <div className="tab-content p-0">
        <div className="tab-pane fade active show" id="profile-post">
          <ul className="timeline">
          <li>

          <div className="timeline-time">

                        <span className="date">{moment(props.post?.createdAt).format('DD-MM')}</span>
                        <span className="time">{moment(props.post?.createdAt).format('HH:mm')}</span>
          </div>

          <div className="timeline-icon">
            <a href="javascript:;">&nbsp;</a>
          </div>
          <div className="timeline-body">
            <div className="timeline-header">
              <span className="userimage">
                <img src={props.usuario.avatar} alt=""></img>
              </span>
              <Link className="teste-link" to={`/perfil-usuario/${props.id_usuario}`}>
                <span className="username">{props.usuario.nome}</span>
              </Link>
              {props.usuario_logado===props.id_usuario&&<button onClick={excluir} className="btn editar excluir">Excluir Post<FiDelete color="red"/> </button>}
            </div>
            <div className="timeline-content">
              <p>{props.titulo}</p>
              <p>{props.conteudo}</p>
            </div>
            <div className="timeline-likes">
              <div className="stats-right">
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
              </div>
            </div>
            <div className="timeline-footer">
              <a
                href="javascript:;"
                className="m-r-15 text-inverse-lighter"
                id="opcoes"
              >
                <LikesButtons id_postagem={props.id_post} usuariologado={props.usuario_logado}/>
              </a>
              
            </div>
            <div className="timeline-comment-box">
              <div className="input">
                  <ComentarioPost id_postagem={props.id_post} usuariologado={props.usuario_logado}/>
              </div>
            </div>
            </div>


         </li>

        </ul>
      </div>
    </div>
    </div>
  )};
