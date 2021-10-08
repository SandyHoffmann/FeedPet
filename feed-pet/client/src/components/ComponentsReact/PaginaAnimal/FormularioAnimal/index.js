import React from "react";
import { api } from "../../../../service";
import "./styles.css"
import {id,secret} from '../../../../varAmbiente'

const jwt = require('jsonwebtoken');

const initialState = {
    nome:"",
    raca:"",
    porte:"Médio",
    cor:"Branco",
    tipo_animal:"",
    status:"",
    sexo:"",
    avatar:"",
    publico:true
}

export class FormAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome:"",
            raca:"",
            porte:"Médio",
            cor:"Branco",
            tipo_animal:"",
            status:"",
            sexo:"",
            avatar:"",
            publico:true
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
            const token = jwt.decode(localStorage.getItem("access-token"),process.env.REACT_APP_REFRESH_TOKEN_SECRET)
            let formData = new FormData();
            formData.append("avatar",this.state.avatar);
            let animalFormado = {nome:this.state.nome,
                                raca:this.state.raca,
                                porte:this.state.porte,
                                cor:this.state.cor,
                                tipo_animal:this.state.tipo_animal,
                                status:this.state.status,
                                sexo:this.state.sexo,
                                publico:this.state.publico,
                                avatar:formData}
            const animal = await api.post(`/usuarios/animais/${token.sub}`, 
                animalFormado, {
                    headers: {
                        "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
                        }
                });
            console.log(animal.data)
            this.props.setarCard(animal.data)
            this.setState({...initialState})
            this.props.fecharForm()
        } catch (error) {
            console.log(error)
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
                <label htmlFor="sexo">Sexo</label>
                <div className="form-check" id="form">
                    <input className="form-check-input" type="radio" name="sexo" id="radiotipo1" value="macho" onChange={this.handleChange}/>
                    <label className="form-check-label" htmlFor="radiotipo1">
                        Macho
                    </label>
                </div>
                <div className="form-check" id="form">
                    <input className="form-check-input" type="radio" name="sexo" id="radiotipo2" value="fêmea" onChange={this.handleChange}/>
                    <label className="form-check-label" htmlFor="radiotipo2">
                        Fêmea
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
                <div className="form-group" className="Porte">
                    <label htmlFor="porte">Selecione o Porte</label>
                    <select className="form-control" id="porte" name="porte" onChange={this.handleChange} value={this.state.porte}>
                        <option>Médio</option>
                        <option>Grande</option>
                        <option>Pequeno</option>
                    </select>
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
                <input type="file" name="avatar" className="form-cadastro img inputfile" onChange={this.handleChange}/>
                <br/>
                <div className="form-check" id="form">
                    <input className="form-check-input" type="radio" name="publico" id="radiotipo1" value={true} onChange={this.handleChange}/>
                    <label className="form-check-label" htmlFor="radiotipo1">
                        Publico
                    </label>
                </div>
                <div className="form-check" id="form">
                    <input className="form-check-input" type="radio" name="publico" id="radiotipo2" value={false} onChange={this.handleChange}/>
                    <label className="form-check-label" htmlFor="radiotipo2">
                        Privado
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>            
            </>
        );
    }
}
