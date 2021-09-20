import React from "react";
import { Pesquisa } from "../Pesquisa";
import { useState, useEffect } from "react";
import "./style.css"
import { HomeAnimal } from "../Home";
import { Cardhometeste } from "../../PaginaAnimal/CardsHome";
import { api } from "../../../../service";

export function FiltragemHome(props){
    const [filtrarTexto, setFiltrarTexto] = useState("")
    const [card, setCard] = useState([])
    const [cardFiltrada,setCardFiltrada]=useState([])

    useEffect(async () => {
        try {
            const res = await api.get(`/animais`);
            const informacao = res.data;
            setCard(informacao.reverse())
            setCardFiltrada(informacao.reverse())
        } catch (error) {
            console.log(error)
        }
    }, [])

    function filtrar(informacao){
        let lista_filtrada = []
        for (let i of card){
            if (i.nome.includes(informacao)){
                lista_filtrada.push(i)
            }
        }
        setCardFiltrada(lista_filtrada)
    }

    function handleChange(e){
        setFiltrarTexto(e.target.value)
        filtrar(e.target.value)
    }
    
    function handleClick(e){
        setFiltrarTexto(e.target.value)
    }

    
        return(
            <>
            <div className="Tabela">
                <Pesquisa texto={filtrarTexto} onChange={handleChange} onClick={handleClick}/>
                <Cardhometeste animais={cardFiltrada} className="cardReact" />
            </div>
            </>
        )
}