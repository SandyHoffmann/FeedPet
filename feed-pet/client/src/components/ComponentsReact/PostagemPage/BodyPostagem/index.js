import React from "react";
import { api } from "../../../../service";
import { CaixaComentarios } from "../../../CaixaComentarios";
import { NotFound } from "../../notFound";
import { PostagemCard } from "../CardPost";
import { ModalPostagem } from "../Modal";
import { Postagem } from "../Post";
import "./styles.css"
const jwt = require('jsonwebtoken');

export class CorpoPaginaPostagem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postagem: [],
            usuario: ""
        };
    }

    async componentDidMount() {
        try {
            const res = await api.get("/postagens");
            const postagens = res.data;
            const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
            if (token){
                const usuarioLogado = (await api.get(`/usuarios/${token?.sub}`)).data;
                console.log(usuarioLogado)
                this.setState(() => ({ usuario: usuarioLogado }))

            }

            this.setState({ postagem: postagens.reverse() })
        } catch (error) {
            console.log(error)
        }
    }

    addPostagem = postagens => {
        postagens["usuario"] = this.state.usuario
        this.setState({
            postagem: [
                postagens,
                ...this.state.postagem
            ]
        });
    }

    removePost = postagens => {
        this.setState({
            postagem: 
                postagens
            
        });
    }

    render() {
        const postagens = this.state.postagem
        return (
            <>
                {/* <CaixaComentarios nome="Teste" dataComentario="22/08/2021" avatarUsuario="https://i.pinimg.com/736x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg" comentario="audshfiauhsdifuhasdiuhfiasudhfiuasdhifuhaiusdhfiasudhfiuasdhifuda fdshsadfsdhsadlsadkçlsjalçsaçsa fhsalsdfsdfhsdflsdjdfshfsdhsadaa hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdsf hhhhhhhhhhhhhhh"/> */}
                <div className="pagPostagem">
                    {this.state.usuario&&
                        <div className="divBotao">
                            <ModalPostagem setarPost={this.addPostagem} className="botaoPostagem" />
                        </div>
                    }
                    <div className="bodyPost">
                        <div className="tab-content p-0">
                            <div className="tab-pane fade active show" id="profile-post">
                                <ul className="timeline post">
                                    {postagens.length < 1 &&
                                        <div className="profile-content">
                                            <div className="tab-content p-0">
                                                <div className="tab-pane fade active show" id="profile-post">
                                                    <ul className="timeline">
                                                    <div className="timeline-icon">
                                                        <a href="javascript:;">&nbsp;</a>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <li>
                                                            
                                                            <NotFound img='https://i.imgur.com/dOkrC9k.gif' titulo='Não há postagens!'></NotFound>
                                                        </li>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    <li>
                                        {postagens.map(post => <PostagemCard key={post.id} id_post={post.id} post={post} usuario={post.usuario} id_usuario={post.user_id} titulo={post.titulo} conteudo={post.conteudo} usuario_logado={this.state.usuario.id} setarPost={this.removePost} posts={postagens}></PostagemCard>)}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    };
}