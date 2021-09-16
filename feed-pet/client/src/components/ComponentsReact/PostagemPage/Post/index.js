import { PostagemCard } from "../CardPost";

export function Postagem({postagens}) {
    
    const post = postagens;
    console.log(post)
    return (
            <div className="corpoPostagem">
                 {post.map(postagem => <PostagemCard key={postagem.id} titulo={postagem.titulo} conteudo={postagem.conteudo} ></PostagemCard>)}
            </div>
        );
    
}
