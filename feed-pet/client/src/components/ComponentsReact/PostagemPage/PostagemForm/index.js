import React, { createElement } from "react";
import { api } from "../../../../service";
import "./styles.css"
import {id,secret} from '../../../../varAmbiente'
import { VerificarErros } from "../../../../errorHandling";

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

            const post = await api.post(`/usuarios/postagens`,
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
            VerificarErros(erros)
        }
    }

    render() {

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group titulo-err form-err">
                    <label htmlFor="nome">Titulo:</label>
                    <input type="text" className="form-control" id="nome" name="titulo" aria-describedby="Nome" value={this.state.nome} onChange={this.handleChange} placeholder="Nome do Animal"/>
                </div>
                <div className="form-group conteudo-err form-err">
                    <label htmlFor="nome">Conteudo:</label>
                    <input type="text" className="form-control" id="nome" name="conteudo" aria-describedby="Nome" value={this.state.nome} onChange={this.handleChange} placeholder="Nome do Animal"/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>            
            </>
        );
    }
}
