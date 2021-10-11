import React from "react";
import { CardTesteReact } from "../Card";
import { FormAnimal } from "../FormularioAnimal";
import "./styles.css";
import gif from "../../../../assets/dog.gif"

export function Cardhometeste(props) {
    
    const card = props.animais;

    return (
            <div className="corpoAnimal">
                {(card.length<1) && <div className="notFoundYet">
                    <img src={gif} className="gifNotFoundYet"></img>
                    <h1>Ainda não há postagens!</h1>
                </div>}
                 {card.map(card => <CardTesteReact id={card.id} key={card.id} nome={card.nome} raca={card.raca} imagem = {card.avatar} status={card.status}></CardTesteReact>)}
            </div>
        );
    
}
