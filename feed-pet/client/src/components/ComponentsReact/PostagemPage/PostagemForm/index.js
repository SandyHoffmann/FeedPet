import React from "react";
import { api } from "../../../../service";
import "./styles.css"
import {id,secret} from '../../../../varAmbiente'

const jwt = require('jsonwebtoken');

const initialState = {
    titulo:"",
    conteudo:""
}

export class FormPostagem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo:"",
            conteudo:""
        };
    }

    
    handleChange = e => {
        const value = e.target.value;
        const nome = e.target.name;
        this.setState({
            [nome]:value
        });
    }
    
    handleSubmit = async e => {
        try {
            e.preventDefault();
            let token = jwt.decode(localStorage.getItem("token"),secret).sub
            console.log(token)
            await api.post(`/usuarios/postagens/${'c49ebd84-bba1-4b8e-9689-e20f0fabc661'}`,
                {
                    "titulo":this.state.titulo,
                    "conteudo": this.state.conteudo
                }
            )
            this.props.setarPost(this.state)
            this.setState({titulo:"",conteudo:""})
            this.props.fecharForm()

        } catch (error) {
            console.log(this.state)
        }
    }

    render() {

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Titulo:</label>
                    <input type="text" className="form-control" id="nome" name="titulo" aria-describedby="Nome" value={this.state.nome} onChange={this.handleChange} placeholder="Nome do Animal"/>
                </div>
                <div className="form-group">
                    <label htmlFor="nome">Conteudo:</label>
                    <input type="text" className="form-control" id="nome" name="conteudo" aria-describedby="Nome" value={this.state.nome} onChange={this.handleChange} placeholder="Nome do Animal"/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>            
            </>
        );
    }
}
