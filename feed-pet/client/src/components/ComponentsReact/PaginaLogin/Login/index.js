import React from "react";
import { api } from "../../../../service";
import authServices from "../../../../service/authServices";
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
            await authServices.signIn(this.state.email,this.state.senha)
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
