import img from "../../assets/olho.jpg";
import "./styles.css";

export function CardTeste2(){
return(
    <div className="card cardTeste">
    <img className="card-img-top" src={img} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
)
}

