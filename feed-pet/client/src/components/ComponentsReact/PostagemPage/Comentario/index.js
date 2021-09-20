import { api } from "../../../../service";
import React from "react";
import img from "../../../../assets/olho.jpg";
import { CardComentario } from "../CardComentario";


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
            const comentario = res.data;
            this.setState({comentarios:comentario})
            console.log(comentario)

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
            // let token = jwt.decode(localStorage.getItem("token"),secret).sub
            // console.log(token)
            const comentario = await api.post(`/postagens/${'f7cbfb44-eb12-42e4-a582-4cd973cf13a2'}/${this.props.id_postagem}/comentarios`,
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
                {this.state.comentarios.map(coment => <CardComentario key={coment.id} conteudo={coment.conteudo} ></CardComentario>)}
            </>

        )

    }
}

