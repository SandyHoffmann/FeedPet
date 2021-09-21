import React from "react";
import { api } from "../../../../../service";
import { useState, useEffect } from "react";
import { FormularioPostagem } from "../../Formularios/FormPostagem";
import { ModalPostagem } from "../../FormElements/Modal";
import { LikesButtons } from "../../Curtida";
import { PostagemCard } from "../PostagemDefault";
import { Comentarios } from "../../CaixaDeComentarios";


export function Postagens(props){
    const [postagem,setPostagem] = useState([])

    useEffect(async () => {
        try {
            const res = await api.get("/postagens");
            const postagens = res.data;
            console.log(postagens)
            setPostagem(postagens)

        } catch (error) {
            console.log(error)
        }
    },[])


        const postagens = postagem
        return (
                <div className="bodyPost">
                        <FormularioPostagem addPost = {setPostagem} postagens={postagem}/>
                        <div className="tab-content p-0">
                            <div className="tab-pane fade active show" id="profile-post">
                                
                                <ul className="timeline post">
                                    <li>
                                    {postagens.map(post =><> <PostagemCard
                                                                key={post.id}
                                                                id_post={post.id}
                                                                  titulo={post.titulo}
                                                                conteudo={post.conteudo}>
                                                            <LikesButtons id_postagem={post.id}>  
                                                            </LikesButtons>
                                                            <Comentarios id_postagem={post.id}/>
                                                            </PostagemCard>                                                            
                                                            </>
                                                            )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
        )
    }
