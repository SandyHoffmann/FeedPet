import React from "react";
import { api } from "../../../../service";
import { CaixaComentarios } from "../../../CaixaComentarios";
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
            usuario:""
        };
    }

    async componentDidMount() {
        try {
            const res = await api.get("/postagens");
            const postagens = res.data;
            const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
            const usuarioLogado = await api.get(`/usuarios/${token.sub}`);        
            this.setState({ postagem: postagens.reverse() })
            this.setState({usuario:usuarioLogado.data})
        } catch (error) {
            console.log(error)
        }
    }

    addPostagem = postagens => {
        postagens["usuario"]=this.state.usuario
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
            <>
            {/* <CaixaComentarios nome="Teste" dataComentario="22/08/2021" avatarUsuario="https://i.pinimg.com/736x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg" comentario="audshfiauhsdifuhasdiuhfiasudhfiuasdhifuhaiusdhfiasudhfiuasdhifuda fdshsadfsdhsadlsadkçlsjalçsaçsa fhsalsdfsdfhsdflsdjdfshfsdhsadaa hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdsf hhhhhhhhhhhhhhh"/> */}
            <div className="pagPostagem">
            <div className="divBotao">
                <ModalPostagem setarPost={this.addPostagem} className="botaoPostagem"/>
            </div>
                <div className="bodyPost">
                        <div className="tab-content p-0">
                            <div className="tab-pane fade active show" id="profile-post">
                                <ul className="timeline post">
                                    <li>
                                    {postagens.map(post => <PostagemCard key={post.id} id_post={post.id} usuario={post.usuario} id_usuario={post.user_id} titulo={post.titulo} conteudo={post.conteudo}></PostagemCard>)}
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