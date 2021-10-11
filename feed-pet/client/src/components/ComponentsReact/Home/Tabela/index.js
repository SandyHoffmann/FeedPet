import React from "react";
import { Pesquisa } from "../Pesquisa";
import { useState, useEffect } from "react";
import "./style.css"
import { HomeAnimal } from "../Home";
import { Cardhometeste } from "../../PaginaAnimal/CardsHome";
import { api } from "../../../../service";
import { PesquisaEstilo } from "../Pesquisa-Estilo";

export function FiltragemHome(props) {
    const [filtrarTexto, setFiltrarTexto] = useState("")
    const [card, setCard] = useState([])
    const [cardFiltrada, setCardFiltrada] = useState([])
    const [filtros, setFiltros] = useState([])
    let cards;
    useEffect(async () => {
        try {
            const res = await api.get(`/animais`);
            const informacao = res.data;
            setCard(informacao.reverse())
            setFiltros(
                { raca: "", tipo_animal: "", status: "", cor: "", sexo:"", porte:""}
            )
            setCardFiltrada(informacao.reverse())
        } catch (error) {
            console.log(error)
        }
    }, [])

    function filtrar(informacao = filtrarTexto) {
        let lista_filtrada = []
        let lista
        let lista_filtros
        let verificar

        for (let i of card) {
            lista = Object.values(i)
            lista_filtros = Object.values(filtros)
            verificar = true
            for (let e of lista_filtros) {
                console.log(e)
                if (!lista.includes(e) && e != "") {
                    console.log(lista)
                    verificar = false
                }
            }
            if (i.nome.toLowerCase().includes(informacao.toLowerCase()) || (informacao == "")) {
                console.log(informacao != "")
                if (verificar) lista_filtrada.push(i)

            }
        }
        setCardFiltrada(lista_filtrada)
    }


    function handleChange(e) {
        setFiltrarTexto(e.target.value)
        filtrar(e.target.value)
        cards = cardFiltrada.map(card => { return card.nome })
        console.log(cards)
    }

    function handleClick(e) {
        const dic = filtros
        const value = e.target.value;
        const nome = e.target.name;
        if (e.target.checked == true && dic[nome] == value){
            e.target.checked = false
            dic[nome] = ""
        } else{
            dic[nome] = value
        }
        setFiltros(dic)
        console.log(filtros)
        filtrar()
    }


    return (
        <>
            <div className="Tabela">
                <PesquisaEstilo options={cards} texto={filtrarTexto} onChange={handleChange} onClick={handleClick} onChangeOption={handleClick} tipo_animal={filtros.tipo_animal} />
                <div className="bodyAnimal">

                    <Cardhometeste animais={cardFiltrada} className="cardReact" />
                </div>

            </div>
        </>
    )
}