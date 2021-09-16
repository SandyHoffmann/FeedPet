import img from "../../../../assets/olho.jpg";
import { LikesButtons } from "../Curtida";
import '../../../PaginaAnimal/styles.css'
import './styles.css'
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
        <div className="timeline-footer">
          <LikesButtons id_postagem={props.id_post}/>
        </div>
        <div className="timeline-comment-box">
          <div className="user">
            <img src={img}></img>
          </div>
          <div className="input">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control rounded-corner"
                  placeholder="Write a comment..."
                ></input>
                <span className="input-group-btn p-l-10">
                  <button
                    className="btn btn-primary f-s-12 rounded-corner"
                    type="button"
                  >
                    Comment
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
}