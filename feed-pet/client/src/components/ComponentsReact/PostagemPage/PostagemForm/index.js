import React, { createElement } from "react";
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
            // let token = jwt.decode(localStorage.getItem("token"),secret).sub
            // console.log(token)
            const token = jwt.decode(localStorage.getItem("access-token"),process.env.REACT_APP_REFRESH_TOKEN_SECRET)

            const post = await api.post(`/usuarios/postagens/${token.sub}`,
                {
                    "titulo":this.state.titulo,
                    "conteudo": this.state.conteudo
                }
            )

            if (!post.ok){
                console.log(post.body)
            }

            this.props.setarPost(post.data)
            this.setState({titulo:"",conteudo:""})
            this.props.fecharForm()
            
        } catch (error) {
            let erros = error.response.data
            console.log(erros)
            let inputs = document.querySelectorAll('.postagem')
            for (let input of inputs){
                let pExistentes = input.querySelector('p')
                if (pExistentes) input.removeChild(pExistentes)
            }

            for (let err of erros.errors){
                let elementoAdc = document.querySelector('.'+err.param+'-postagem')
                let p = document.createElement("p")
                p.innerHTML = err.msg
                p.className = 'err'
                elementoAdc.appendChild(p)
            }
        }
    }

    render() {

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group titulo-postagem postagem">
                    <label htmlFor="nome">Titulo:</label>
                    <input type="text" className="form-control" id="nome" name="titulo" aria-describedby="Nome" value={this.state.nome} onChange={this.handleChange} placeholder="Nome do Animal"/>
                </div>
                <div className="form-group conteudo-postagem postagem">
                    <label htmlFor="nome">Conteudo:</label>
                    <input type="text" className="form-control" id="nome" name="conteudo" aria-describedby="Nome" value={this.state.nome} onChange={this.handleChange} placeholder="Nome do Animal"/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>            
            </>
        );
    }
}
