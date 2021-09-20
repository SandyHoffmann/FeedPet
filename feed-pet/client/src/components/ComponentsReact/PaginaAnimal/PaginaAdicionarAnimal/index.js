import React from "react";
import { api } from "../../../../service";
import { Cardhometeste } from "../CardsHome";
import { ModalAnimal } from "../Modal";
import "./styles.css"
const jwt = require('jsonwebtoken');

export class CorpoPaginaAdicionarAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: []
        };
    }

    async componentDidMount(){
        try {
            const token = jwt.decode(localStorage.getItem("access-token"),process.env.REACT_APP_REFRESH_TOKEN_SECRET)
            const res = await api.get(`/usuarios/animais/${token.sub||'undefined'}`);
            const animais = res.data;
            this.setState({card:animais.reverse()})
        } catch (error) {
            console.log(error)
        }
    }

    addCard = cards => {
        
        this.setState({
            card: [
                cards,
                ...this.state.card                
            ]
        });
    }

    render(){
        return(
            <>
                <ModalAnimal setarCard={this.addCard}/>
                <Cardhometeste animais={this.state.card} className="cardReact"/>
            </>
        )
    };
  }
  