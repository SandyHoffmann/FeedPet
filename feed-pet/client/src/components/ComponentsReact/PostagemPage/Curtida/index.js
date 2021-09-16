import { LikeDeslike } from "../../LikeDeslike";
import { api } from "../../../../service";
import { useState, useEffect } from "react";

export function LikesButtons(props) {
    let id_postagem = props.id_postagem
    const [totalLikes,setTotalLikes] = useState(0)



    useEffect(async () => {
        try {
            const res = await api.get(`/postagens/${id_postagem}/curtidas`)
            const curtidas = res.data.length;
            console.log(typeof curtidas)
            setTotalLikes(curtidas);
        } catch (error) {
            console.log(error)
        }
    },[])

    async function handleClick(e) {
        try {
            e.preventDefault();
            // let token = jwt.decode(localStorage.getItem("token"),secret).sub
            // console.log(token)
            await api.post(`/usuarios/postagens/${'ed39d86e-7577-4c2c-8ba7-2a47343eac17'}`,
                {
                    "titulo":this.state.titulo,
                    "conteudo": this.state.conteudo
                }
            )
            this.props.setarPost(this.state)
            this.setState({titulo:"",conteudo:""})
            this.props.fecharForm()

        } catch (error) {
            console.log(this.state)
        }
    }

    return(
        <>
         <LikeDeslike/><span>{totalLikes}</span>
        </>
    );
}