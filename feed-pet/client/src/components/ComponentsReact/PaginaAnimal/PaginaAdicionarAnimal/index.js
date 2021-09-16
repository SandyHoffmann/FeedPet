import React from "react";
import { api } from "../../../../service";
import { Cardhometeste } from "../CardsHome";
import { ModalAnimal } from "../Modal";
import "./styles.css"

export class CorpoPaginaAdicionarAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: []
        };

    }

    async componentDidMount(){
        try {
            const res = await api.get(`/usuarios/animais/${'c49ebd84-bba1-4b8e-9689-e20f0fabc661'}`);
            const animais = res.data;
            console.log(animais)
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
  