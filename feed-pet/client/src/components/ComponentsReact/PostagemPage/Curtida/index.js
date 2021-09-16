import { LikeDeslike } from "../../LikeDeslike";
import { api } from "../../../../service";
import { useState, useEffect } from "react";

export function LikesButtons(props) {
    let id_postagem = props.id_postagem
    console.log(id_postagem)
    const [totalLikes,setTotalLikes] = useState(0)



    useEffect(async () => {
        try {
            const res = await api.get(`/postagens/${id_postagem}/curtidas`)
            const curtidas = res.data.length;
            this.props.setarPost(this.state)
            setTotalLikes({
                curtidas
            });
        } catch (error) {
            console.log(error)
        }
    })

    
    return(
        <>
         <LikeDeslike/><p>{totalLikes}</p>
        </>
    );
}