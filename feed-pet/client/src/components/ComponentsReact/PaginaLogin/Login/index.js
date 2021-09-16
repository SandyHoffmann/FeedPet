import React from "react";
import { api } from "../../../../service";
import {id,secret} from '../../../../varAmbiente'

const jwt = require('jsonwebtoken');

const initialState = {
    email:"",
    senha:""
}

export class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            senha:""
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
            // let token = jwt.decode(localStorage.getItem("token"),secret).sub
            // console.log(token)
            await api.post(`/usuarios/animais/${'c49ebd84-bba1-4b8e-9689-e20f0fabc661'}`,
                {   "email":this.state.email,
                    "senha": this.state.senha
                }
            )
            this.setState({...initialState})
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
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" id="email" name="email" aria-describedby="Email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Nome:</label>
                    <input type="text" className="form-control" id="senha" name="senha" aria-describedby="Senha" value={this.state.senha} onChange={this.handleChange} placeholder="Senha"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>            
            </>
        );
    }
}
