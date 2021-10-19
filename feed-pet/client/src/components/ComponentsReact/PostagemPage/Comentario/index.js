import { api } from "../../../../service";
import React from "react";
import { CardComentario } from "../CardComentario";
import { VerificarErros } from "../../../../errorHandling";
const jwt = require('jsonwebtoken');


export class ComentarioPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conteudo: "",
            comentarios: [],
            usuario: ""

        };
    }

    async componentDidMount(){
        try {
            const res = await api.get(`/postagens/${this.props.id_postagem}/comentarios`);
            const comentario = res.data.reverse();
            const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
            if (token){
                const usuarioLogado = await api.get(`/usuarios/${token?.sub}`);        
                this.setState({usuario:usuarioLogado.data})
            }
          
            this.setState({comentarios:comentario})

        } catch (error) {
            console.log(error)

        }
    }

    addComentario = comentario => {
        comentario["usuario"]=this.state.usuario
        this.setState({
            comentarios: [
                comentario,
                ...this.state.comentarios                
            ]
        });
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
            if (this.state.conteudo.length>1 && this.state.conteudo.length<40){

            const comentario = await api.post(`/postagens/${this.props.id_postagem}/comentarios`,
                {
                    "conteudo": this.state.conteudo
                }
            )
            // this.props.setarPost(this.state)
            this.setState({conteudo:""})
            this.addComentario(comentario.data)
        } else {
            VerificarErros({errors:[{param:'conteudo',msg:'Mensagem com comprimento invalido!'}]})

        }

        } catch (error) {
            console.log(this.state)
        }
    }
    render() {
        return (
            <>
            {this.state.usuario&&<>
                
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control rounded-corner"
                                placeholder="Escreva Algo..."
                                name="conteudo"
                                minLength="1"
                                maxLength="39"
                                value={this.state.conteudo} onChange={this.handleChange}
                            ></input>
                            <span className="input-group-btn">
                                <button
                                    className="btn f-s-12 rounded-corner btn-green"
                                    type="submit"
                                    id="botao-comentario"
                                >
                                    Comente!
                                </button>
                            </span>
                        </div>
                    </form><div className="form-err conteudo-err"></div></>||<p>Faça login para interagir com os posts!</p>}
                    <div>
                      {this.state.comentarios.map(coment => <CardComentario key={coment.id} comentario={coment} criado = {coment.createdAt} conteudo={coment.conteudo} usuario={coment.usuario}></CardComentario>)}
                </div>
            </>

        )

    }
}

