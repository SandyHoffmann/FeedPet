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
            const res = await api.get("/animais");
            const animais = res.data;
            console.log(animais)
            this.setState({card:animais})
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
  