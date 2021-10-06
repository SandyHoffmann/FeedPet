import React from "react";
import { api } from "../../../../service";
import authServices from "../../../../service/authServices";
import {id,secret} from '../../../../varAmbiente'
import { Form } from 'react-bootstrap';
import "./styles.css"
import { Link } from "react-router-dom";
import povdogrunning from "./povdogrunning.jpg";

const jwt = require('jsonwebtoken');

const initialState = {
    email:"",
    senha:""
}

export class FormLoginEstilizado extends React.Component {
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
            window.location.replace("/");    

        } catch (error) {
            console.log(this.state)
        }
    }

    render() {

        return (
            <>
        <div className="grandecaixa">
            <div className="caixaimagem"><img src={povdogrunning} className="bluhrit"></img></div>
            <div className="container caixa">
                <form onSubmit={this.handleSubmit} className="caixaElemento">
                <h1>Login</h1>
                <div className="form-group">
                    <br/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" id="email" name="email" aria-describedby="Email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                </div>
                <br/>

                <div className="form-group">
                    <label htmlFor="senha">Nome:</label>
                    <input type="text" className="form-control" id="senha" name="senha" aria-describedby="Senha" value={this.state.senha} onChange={this.handleChange} placeholder="Senha"/>
                </div>
                <br/>

                <button type="submit" className="btn btn-primary">Enviar</button>
                <Link to="/cadastro" className="caixaElemento">Cadastre-se</Link>
                </form> 
                <br/>
                

                </div>
            </div>
            </>

        );
    }
}
