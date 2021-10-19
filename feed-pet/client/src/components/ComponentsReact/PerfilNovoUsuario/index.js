import "./styles.css";
import { useState, useEffect, useRef } from "react";
import {Link, useParams} from "react-router-dom";
import { api } from "../../../service";
import { AiOutlineEdit } from "react-icons/ai";
import { EdicaoPessoa } from "./EdicaoPessoa";
import { PostagemCard } from "../PostagemPage/CardPost";
import { Carousel, Col, Image } from "react-bootstrap";

const jwt = require('jsonwebtoken');

export function PaginaPerfilAtualizado(props) {
  const [informacoes, setInformacoes] = useState([])
  const [animais, setAnimal] = useState([])
  const [usuario, setUsuario] = useState([])
  const [posts, setPosts] = useState([])
  const {id} = useParams();
  const editando = useRef(false)

  useEffect(() => {
    async function fetchUserData() {
      try {
        const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
        setUsuario(token?.sub)
        const res = await api.get(`/usuarios/${id}`);
        let animais = await api.get(`/usuarios/animais/${id || 'undefined'}`);
        const informacao = res.data;
        const resPost = await api.get(`/postagens/especificas/${id}`);
        const postagens = resPost.data;
        setPosts(postagens)
        setInformacoes(informacao)
        setAnimal(animais.data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchUserData();
  }, id)

  function editar(e){
    if (editando.current == false){
      let div = document.querySelectorAll(".pessoaEditar")
      div[0].className = "pessoaEditar"
      let divInvisivel = document.querySelectorAll(".UsuarioDados")
      divInvisivel[0].className = "UsuarioDados invisivel"
      editando.current = true

    } else{
      let div = document.querySelectorAll(".pessoaEditar")
      div[0].className = "pessoaEditar invisivel"
      let divInvisivel = document.querySelectorAll(".UsuarioDados")
      divInvisivel[0].className = "UsuarioDados"
      editando.current = false
    }
  }

  return (
    <>
      <section id="container-total" className="container">
        <div className="perfilFlex">
          <div className="panel totalperfil" id="bordaheading">
            <div className="informacoesUsuario">
            {(usuario === informacoes.id)&&<button onClick={editar} className="btn editar">Editar <AiOutlineEdit/> </button>}
              <div className="fotoUsuario ">

                <Col xs={10} md={10} className="media-object mw150">
                  <Image src={informacoes.avatar} thumbnail />
                </Col>
              
              </div>
              <div className="media-body animalEstatistica">
                <div className="UsuarioDados">
                  <h2 className="media-heading">{informacoes.nome}</h2>
                  <p className="lead" id="texto-sobre">
                    {informacoes.descricao?informacoes.descricao:"Escreva uma Descrição no Editar!"}
                  </p>
                </div>
                <div class="pessoaEditar invisivel">
                    <EdicaoPessoa informacao={informacoes} setinfo={setInformacoes}/>
                </div>  
                <div className="loadFlex">
                <p className="carregando"></p>
                </div>
                <div class="counter-perfil-pessoa" >
                  {/* <div class="row"> */}
                    <div class="iconesPerfil">
                      <div>
                        <h6
                          class="count h2"
                          id="icones"
                          data-to="500"
                          data-speed="500"
                        >
                          <img src='https://i.imgur.com/9wYz4GH.png'></img>
                        </h6>
                        <p class="m-0px font-w-600">Ajudou 5 animais</p>
                      </div>
                    </div>
                    <div>
                      <div class="count-data text-center">
                        <h6
                          class="count h2"
                          id="icones"
                          data-to="850"
                          data-speed="850"
                        >
                          <img src='https://i.imgur.com/YFQQsA5.png'></img>
                        </h6>
                        <p class="m-0px font-w-600">Tutor de {animais.length} animais</p>
                      </div>
                    </div>
                    <div>
                      <div class="count-data text-center">
                        <h6
                          class="count h2"
                          id="icones"
                          data-to="190"
                          data-speed="190"
                        >
                          <img src='https://i.imgur.com/7UuTzkO.png'></img>
                        </h6>
                        <p class="m-0px font-w-600">Mora em Timbó</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className="animais animaisPerfil">
              <div className="sliderAnimalPerfil">
            
<Carousel id="carouselAnimaisPessoa" interval={null} variant="dark">
          {animais.length===0&&
            <Carousel.Item>
              <div className="divImgCarrosel">
                <img
                  className="carouselAnimal"
                  id="fotoCarousel"
                  src='https://i.imgur.com/FVp8SzH.jpg'
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <h3>O usuario ainda não possui animais!</h3>
              </Carousel.Caption>
            </Carousel.Item>}
          {animais.map(animal => {
            return <Carousel.Item id={animal.id}>
              <div className="divImgCarrosel">
                <img
                  className="carouselAnimal"
                  id="fotoCarousel"
                  src={animal.avatar}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <h3>{animal.nome}</h3>
                <Link to={`/perfil/${animal.id}`} id={animal.id} activeClassName="selected" className="link-drop">Perfil</Link>
              
              </Carousel.Caption>
            </Carousel.Item>

          })}
        </Carousel>
              </div>
            </div>
          </div>
        </div>
        </section>
        <div className="bodyPost">
            <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                    <ul className="timeline post">
                        <li>
                            {posts.map(post => <PostagemCard key={post.id} id_post={post.id} post={post} usuario={post.usuario} id_usuario={post.user_id} titulo={post.titulo} conteudo={post.conteudo} usuario_logado={usuario?.id} posts={posts} tipo="perfil"></PostagemCard>)}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </>
  );
}
