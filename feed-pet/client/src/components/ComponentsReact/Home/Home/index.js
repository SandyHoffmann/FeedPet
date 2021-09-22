import React from "react";
import { api } from "../../../../service";
import { Cardhometeste } from "../../PaginaAnimal/CardsHome";
import { useState, useEffect } from "react";
import "./styles.css"
export function HomeAnimal(props) {

    const [card, setCard] = useState([])
    const [valor,setValor] = useState("")
    
    console.log(props.valor)
    

    
    

    function addCard (cards) {
        setCard(
                cards,
                ...card
        )   
    }
    return (
        <div className="bodyAnimal">
            <Cardhometeste animais={card} className="cardReact" />
        </div>
    )

}
