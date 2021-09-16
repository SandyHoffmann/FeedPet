import img from "../../../../assets/olho.jpg";
import "./styles.css";

export function CardTesteReact(props){
return(
    <div className="card cardReact" key={props.id} className="cardReact">
    <img className="card-img-top" src={img} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">{props.nome}</h5>
        <p className="card-text">{props.raca}</p>
        <a href="#" className="btn btn-primary">Perfil</a>
    </div>
    </div>
)
}
