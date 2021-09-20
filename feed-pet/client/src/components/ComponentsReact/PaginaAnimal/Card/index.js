import { NavLink } from "react-router-dom";
import img from "../../../../assets/olho.jpg";
import "./styles.css";

export function CardTesteReact(props){
return(
    <div className="card cardReact" key={props.id} className="cardReact">
    <img className="card-img-top" src={img} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">{props.nome}</h5>
        <p className="card-text">{props.raca}</p>
        <a href="#" className="btn"><NavLink to={`/perfil/${props.id}`} id={props.id} activeClassName="selected" className="link-drop">Perfil</NavLink></a>
    </div>
    </div>
)
}

