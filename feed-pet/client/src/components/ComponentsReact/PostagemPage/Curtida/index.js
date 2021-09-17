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
            console.log("aaa")
            e.preventDefault();
            // let token = jwt.decode(localStorage.getItem("token"),secret).sub
            // console.log(token)
            await api.post(`/postagens/${'f7cbfb44-eb12-42e4-a582-4cd973cf13a2'}/${id_postagem}/curtidas`,
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