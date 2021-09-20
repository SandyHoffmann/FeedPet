import { LikeDeslike } from "../../LikeDeslike";
import { api } from "../../../../service";
import { useState, useEffect } from "react";
const jwt = require('jsonwebtoken');

export function LikesButtons(props) {
    let id_postagem = props.id_postagem
    const [totalLikes,setTotalLikes] = useState(0)



    useEffect(async () => {
        try {
            
            const res = await api.get(`/postagens/${id_postagem}/curtidas`)
            const curtidas = res.data.length;
            setTotalLikes(curtidas);
            const curtidasVerificacao = res.data
            const achar = curtidasVerificacao.map(curtida => {if (curtida.user_id == 'ed39d86e-7577-4c2c-8ba7-2a47343eac17'){ return true}})
            console.log(achar)
        } catch (error) {
            console.log(error)
        }
    },[])

    async function handleClick(e) {
        try {
            console.log("aaa")
            e.preventDefault();
            const token = jwt.decode(localStorage.getItem("access-token"),process.env.REACT_APP_REFRESH_TOKEN_SECRET)
            await api.post(`/postagens/${token.sub}/${id_postagem}/curtidas`,
                {
                    "tipo":"like"
                }
            )
            const res = await api.get(`/postagens/${id_postagem}/curtidas`)
            const curtidas = res.data.length;
            setTotalLikes(curtidas);

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
         <LikeDeslike onClickBotao={handleClick}/><span>{totalLikes}</span>
        </>
    );
}