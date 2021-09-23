import { api } from "../../../../service";
import React from "react";
import img from "../../../../assets/olho.jpg";
import { CardComentario } from "../CardComentario";
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
            const usuarioLogado = await api.get(`/usuarios/${token.sub}`);        
            this.setState({usuario:usuarioLogado.data})
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
            const token = jwt.decode(localStorage.getItem("access-token"),process.env.REACT_APP_REFRESH_TOKEN_SECRET)
            const comentario = await api.post(`/postagens/${token.sub}/${this.props.id_postagem}/comentarios`,
                {
                    "conteudo": this.state.conteudo
                }
            )
            // this.props.setarPost(this.state)
            this.setState({conteudo:""})
            this.addComentario(comentario.data)


        } catch (error) {
            console.log(this.state)
        }
    }
    render() {
        return (
            <>
                <div className="user">
                    <img src={img}></img>
                </div>
                <div className="input">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control rounded-corner"
                                placeholder="Escreva Algo..."
                                name="conteudo"
                                value={this.state.conteudo} onChange={this.handleChange}
                            ></input>
                            <span className="input-group-btn p-l-10">
                                <button
                                    className="btn btn-primary f-s-12 rounded-corner"
                                    type="submit"
                                >
                                    Comente!
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
                {this.state.comentarios.map(coment => <CardComentario key={coment.id} conteudo={coment.conteudo} usuario={coment.usuario}></CardComentario>)}
            </>

        )

    }
}

