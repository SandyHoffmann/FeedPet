import React from "react";
import { api } from "../../../service";
import "./styles.css"
import {id,secret} from '../../../varAmbiente'

const jwt = require('jsonwebtoken');

const initialState = {
    nome:"",
    raca:"",
    porte:"",
    cor:"",
    tipo_animal:"",
    status:""
}

export class FormAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome:"",
            raca:"",
            porte:"",
            cor:"",
            tipo_animal:"",
            status:""
        };
    }

    
    handleChange = e => {
        const value = e.target.value;
        const nome = e.target.name;
        this.setState({
            [nome]:value
        });
        if (nome == "tipo_animal"){
            if (value == "Cachorro"){
                this.setState({
                    raca:"Pit Bull"
                })
            } else{
                this.setState({
                    raca:"Angora"
                })
            }
        }
    }
    
    handleSubmit = async e => {
        try {
            e.preventDefault();
            let token = jwt.decode(localStorage.getItem("token"),secret).sub
            console.log(token)
            await api.post(`/usuarios/animais/${'8aabd9eb-68a8-4818-a0e3-1f9e60c1dc2c'}`,
                {"nome":this.state.nome,
                    "cor": this.state.cor,
                    "porte":"grande",
                    "status": this.state.status,
                    "tipo_animal":this.state.tipo_animal,
                    "raca": this.state.raca,
                }
            )
            this.props.setarCard(this.state)
            this.setState({...initialState})

        } catch (error) {
            console.log(this.state)
        }
    }

    render() {
        const card = this.state.card;
        console.log(card)

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" id="nome" name="nome" aria-describedby="Nome" value={this.state.nome} onChange={this.handleChange} placeholder="Nome do Animal"/>
                </div>
                <label htmlFor="form">Tem dono?</label>
                <div className="form-check" id="form">
                    <input className="form-check-input" type="radio" name="status" id="radiotipo1" value="Tem dono" onChange={this.handleChange}/>
                    <label className="form-check-label" htmlFor="radiotipo1">
                        Sim
                    </label>
                </div>
                <div className="form-check" id="form">

                    <input className="form-check-input" type="radio" name="status" id="radiotipo2" value="Não possui dono" onChange={this.handleChange}/>
                    <label className="form-check-label" htmlFor="radiotipo2">
                        Não
                    </label>
                </div>
                <label htmlFor="form">Tipo de Animal</label>
                <div className="form-check" id="form">
                    <input className="form-check-input" type="radio" name="tipo_animal" id="exampleRadios1" value="Cachorro" onChange={this.handleChange}/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Cachorro
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="tipo_animal" id="exampleRadios2" value="Gato" onChange={this.handleChange}/>
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Gato
                    </label>
                </div>
                
                <div className="form-group" className={this.state.tipo_animal=="Cachorro" || "hidden"}>
                    <label htmlFor="raca">Selecione a Raça</label>
                    <select className="form-control" id="raca" name="raca" onChange={this.handleChange} value={this.state.raca}>
                        <option>Pit Bull</option>
                        <option>Pastor Alemão</option>
                        <option>Pincher</option>
                        <option>Pitbull</option>
                        <option>Vira Lata</option>
                    </select>
                </div>          
                <div className="form-group" className={this.state.tipo_animal=="Gato" || "hidden"}>
                    <label htmlFor="raca">Selecione a Raça</label>
                    <select className="form-control" id="raca" name="raca" value={this.state.raca} onChange={this.handleChange}>
                        <option>Angora</option>
                        <option>Siames</option>
                        <option>Gato Rebaixado</option>
                        <option>Rajado</option>
                        <option>Vira Lata</option>
                    </select>
                </div>          
                <div className="form-group">
                    <label htmlFor="raca">Selecione a Cor</label>
                    <select className="form-control" id="cor" name="cor" onChange={this.handleChange} value={this.state.cor}>
                        <option>Branco</option>
                        <option>Preto</option>
                        <option>Alaranjado</option>
                        <option>Tricolor</option>
                        <option>Caramelo</option>
                    </select>
                </div>          
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>            
            </>
        );
    }
}
