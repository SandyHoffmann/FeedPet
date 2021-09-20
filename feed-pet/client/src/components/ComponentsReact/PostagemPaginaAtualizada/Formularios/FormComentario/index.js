import { api } from "../../../../service";
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
    })

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

    return(
        <>
        
        
        </>
    )
}