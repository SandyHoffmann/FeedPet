import { LikeDeslike } from "../../LikeDeslike";
import { api } from "../../../../service";
import { useState, useEffect } from "react";
const jwt = require('jsonwebtoken');


export function LikesButtons(props) {
    let id_postagem = props.id_postagem
    let usuarioLogado=props.usuariologado
    const [totalLikes,setTotalLikes] = useState(0)
    const [likeAtivo,setLikeAtivo]=useState('desativado')


    useEffect(async () => {
        try {
            
            const res = await api.get(`/postagens/${id_postagem}/curtidas`)
            const curtidas = res.data.length;
            const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)?.sub
            setTotalLikes(curtidas);
            const curtidasVerificacao = res.data
            console.log(usuarioLogado)
            const achar = curtidasVerificacao.map(curtida => {if (curtida.user_id == token){ setLikeAtivo(()=>'ativado')}})
        } catch (error) {
            console.log(error)
        }
    },[])

    async function handleClick(e) {
        try {
            e.preventDefault();
            await api.post(`/postagens/${id_postagem}/curtidas`,
                {
                    "tipo":"like"
                }
            )
            const res = await api.get(`/postagens/${id_postagem}/curtidas`)
            const curtidas = res.data.length;
            setTotalLikes(curtidas);
            let opcoes = ['ativado','desativado']
            if (likeAtivo == 'ativado'){
                setLikeAtivo(()=>'desativado')
            } else{
                setLikeAtivo(()=>'ativado')
            }
            

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
         {usuarioLogado&&<LikeDeslike onClickBotao={handleClick} ativo={likeAtivo}/>}<span>{totalLikes}</span>
        </>
         

    );
}