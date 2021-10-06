import React from "react";
import { api } from "../../../../service";
import authServices from "../../../../service/authServices";
import {id,secret} from '../../../../varAmbiente'
import { Form } from 'react-bootstrap';
import "./styles.css"
import { Link } from "react-router-dom";
import povdogrunning from "../../../../assets/gifgato.gif";

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

    async componentDidMount() {
        let menu = document.querySelectorAll(".navbar")
        let footer = document.querySelectorAll('.footer')
        let body = document.querySelectorAll('.body')

        menu[0].className += " menuLogin"
        footer[0].className += " footerLogin"
        body[0].className += " homeLogin"
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
                    <input type="text" id="email" name="email" aria-describedby="Email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                </div>
                <br/>

                <div className="form-group">
                    <label htmlFor="senha">Nome:</label>
                    <input type="text" id="senha" name="senha" aria-describedby="Senha" value={this.state.senha} onChange={this.handleChange} placeholder="Senha"/>
                </div>
                <br/>
                <div className="linksForm">
                    <button type="submit" className="btn botaoRosa">Enviar</button>
                    <Link to="/cadastro">Cadastre-se</Link>
                </div>
                </form> 
                <br/>
                

                </div>
            </div>
            </>

        );
    }
}
