import React from "react";
import { api } from "./../../../service";
import { Cardhometeste } from "../PaginaAnimal/CardsHome";

export class HomeAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: []
        };
    }

    async componentDidMount(){
        try {
            const res = await api.get(`/animais`);
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
                <Cardhometeste animais={this.state.card} className="cardReact"/>
            </>
        )
    };
  }
  