import React from "react";
import { api } from "../../../../service";
import { PostagemCard } from "../CardPost";
import { ModalPostagem } from "../Modal";
import { Postagem } from "../Post";
import "./styles.css"

export class CorpoPaginaPostagem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postagem: []
        };
    }


    async componentDidMount() {
        try {
            const res = await api.get("/postagens");
            const postagens = res.data;
            console.log(postagens)
            this.setState({ postagem: postagens })
        } catch (error) {
            console.log(error)
        }
    }

    addPostagem = postagens => {
        this.setState({
            postagem: [
                postagens,
                ...this.state.postagem
            ]
        });
    }

    render() {
        const postagens = this.state.postagem
        return (
            <div className="pagPostagem">
            <div className="divBotao">
                <ModalPostagem setarPost={this.addPostagem} className="botaoPostagem"/>
            </div>
                <div className="bodyPost">
                        <div className="tab-content p-0">
                            <div className="tab-pane fade active show" id="profile-post">
                                <ul className="timeline post">
                                    <li>
                                    {postagens.map(post => <PostagemCard key={post.id} id_post={post.id} titulo={post.titulo} conteudo={post.conteudo} ></PostagemCard>)}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        )
    };
}