import { useState, useEffect } from "react";
import { CardComentario } from "../../PostagemPage/CardComentario";
import { api } from "../../../../service";

export function Comentarios(props) {
    let id_postagem = props.id_postagem
    const [comentarios,setComentarios] = useState([])

    useEffect(async () => {        
        try {
            const res = await api.get(`/postagens/${id_postagem}/comentarios`);
            const comentario = res.data;
            setComentarios(comentario)
            console.log(comentario)

        } catch (error) {
            console.log(error)
        }
    },[])
    // function addComentario (comentario) {
    //     setComentarios([
    //         comentario,
    //         ...comentarios                
    //     ])
    // }

    return(
        <>
            {comentarios.map(coment => <CardComentario key={coment.id} conteudo={coment.conteudo} ></CardComentario>)}
        </>
    )
}
