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
            comentarios: []

        };
    }

    async componentDidMount(){
        try {
            const res = await api.get(`/postagens/${this.props.id_postagem}/comentarios`);
            const comentario = res.data.reverse();
            this.setState({comentarios:comentario})

        } catch (error) {
            console.log(error)
        }
    }

    addComentario = comentario => {
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
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control rounded-corner"
                                placeholder="Escreva Algo..."
                                name="conteudo"
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
                    </form>
                {this.state.comentarios.map(coment => <CardComentario key={coment.id} conteudo={coment.conteudo} ></CardComentario>)}
            </>

        )

    }
}

