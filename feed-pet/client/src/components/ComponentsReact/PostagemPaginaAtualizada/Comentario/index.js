import { api } from "../../../../service";
import React from "react";
import img from "../../../../assets/olho.jpg";
import { CardComentario } from "../CardComentario";

import { useState, useEffect } from "react";


export function ComentarioPost(props) {
    let id_postagem = props.id_postagem
    const [conteudo,setConteudo] = useState("")
    const [comentarios,setComentarios] = useState([])

    useEffect(async () => {        
        try {
            const res = await api.get(`/postagens/${this.props.id_postagem}/comentarios`);
            const comentario = res.data;
            setComentarios(comentario)
            console.log(comentario)

        } catch (error) {
            console.log(error)
        }
    },[])

    function addComentario (comentario) {
        setComentarios([
            comentario,
            ...comentarios                
        ])

    }

    function handleChange (e){
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
            const comentario = await api.post(`/postagens/${'ed39d86e-7577-4c2c-8ba7-2a47343eac17'}/${this.props.id_postagem}/comentarios`,
                {
                    "conteudo": this.state.conteudo
                }
            )
            // this.props.setarPost(this.state)
            this.setState({conteudo:""})
            console.log(comentario.data)
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

