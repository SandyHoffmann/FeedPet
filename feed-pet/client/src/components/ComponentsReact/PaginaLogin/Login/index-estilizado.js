import React from "react";
import { api } from "../../../../service";
import authServices from "../../../../service/authServices";
import {id,secret} from '../../../../varAmbiente'
import { Form } from 'react-bootstrap';
import "./styles.css"
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';

const jwt = require('jsonwebtoken');

const initialState = {
    email:"",
    senha:""
}

const responseGoogle = async (response) => {
    console.log(response);
    const googleToken = response.tokenId;
    
    try {
        const res = await fetch("http://localhost:3000/auth/login-google", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ googleToken })
        });


        if (res.ok) {
            const { accessToken, refreshToken } = await res.json();

            localStorage.setItem("access-token", accessToken);
            localStorage.setItem("refresh-token", refreshToken);
            
            window.location.replace("/")
        } else {
            alert("Aconteceu algum erro ao fazer o login");
        }
    } catch (error) {
        console.log(error);
    }
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
            {/* colocar validações */}
        <div className="grandecaixa">
            <div className="caixaimagem"><img src='https://i.imgur.com/Gfs47Nr.gifv' className="bluhrit"></img></div>
            <div className="container caixa">
                <form onSubmit={this.handleSubmit} className="caixaElemento">
                <h1>Login</h1>
                <div className="form-group form-err">
                    <br/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" aria-describedby="Email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                </div>
                <br/>

                <div className="form-group form-err">
                    <label htmlFor="senha">Nome:</label>
                    <input type="text" id="senha" name="senha" aria-describedby="Senha" value={this.state.senha} onChange={this.handleChange} placeholder="Senha"/>
                </div>
                <br/>
                <div className="linksForm">
                    <button type="submit" className="btn botaoRosa">Enviar</button>
                    <GoogleLogin
                        clientId="735612450237-p38rp9eb8og9btudna89bl3c4k2pnag7.apps.googleusercontent.com"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login Google</button>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
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
