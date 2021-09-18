import React from "react";
import { CardTesteReact } from "../Card";
import { FormAnimal } from "../FormularioAnimal";
import "./styles.css";


export function Cardhometeste(props) {
    
    const card = props.animais;

    return (
            <div className="corpoAnimal">
                 {card.map(card => <CardTesteReact id={card.id} key={card.id} nome={card.nome} raca={card.raca} className="cardReact"></CardTesteReact>)}
            </div>
        );
    
}
