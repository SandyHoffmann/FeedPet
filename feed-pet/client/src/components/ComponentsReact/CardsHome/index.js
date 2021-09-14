import React from "react";
import { api } from "../../../service";
import { CardTesteReact } from "../Card";
import { FormAnimal } from "../FormularioAnimal";

export class Cardhometeste extends React.Component {
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
    render() {
        const card = this.state.card;
        console.log(card)
        return (
            <>
                 <FormAnimal/>
                 <h1>{card.map(card => <CardTesteReact key={card.id} nome={card.nome} raca={card.raca}></CardTesteReact>)}</h1>
            </>
        );
    }
}
