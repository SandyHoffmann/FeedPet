import "./styles.css";
import { useState, useEffect, useRef } from "react";
import { api } from "../../../../service";
import { Link, useParams } from "react-router-dom";
import { AgendaAnimal } from "../Agenda";
import { Alert, Popover } from "react-bootstrap";
import { EdicaoAnimal } from "../Edicao";
import { AiOutlineEdit } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";
import swal from 'sweetalert';

import ReactTooltip from "react-tooltip";

const jwt = require('jsonwebtoken');
const moment = require('moment'); 




export function PaginaAnimal(props) {
  const [informacoes, setInformacoes] = useState([])
  const [desaparecido, setDesaparecido] = useState([])
  const [dados,setDados] = useState([])
  const [usuario, setUsuario] = useState([])
  const [dono, setDono] = useState([])
  const editando = useRef(false)
  const { id } = useParams();
  console.log(id)
  useEffect(async () => {
    try {
      const res = await api.get(`/animais/geral/${id}`);
      const informacao = res.data;
      console.log(informacao)
      setInformacoes(informacao)
      setDono(informacao.usuario[0])
      if (informacao.status === "Desaparecido") {
        const desaparecido = await api.get(`/alertas/${id}`);
        setDesaparecido(desaparecido.data)
      }
      const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
      setUsuario(token.sub)
      const agenda = await api.get(`/agendas/${id}`);
      let dados = agenda.data[1].map(atividade => atividade.atividade_feita.split("/separar/"))
      let lista = {"comida":0,"dormir":0}
      if (dados){
        for (let d of dados){
          for(let e of d){
            if (e == "Dei Ração"){
              lista.comida+=1
            } if (e == "Dormiu aqui"){
              lista.dormir+=1
            }
          }
         
        }
      }
      setDados(lista)
    } catch (error) {
      console.log(error)
    }
  }, id)
  async function AnimalEncontrado() {
    const res = await api.put(`/alertas/${desaparecido.id}/${id}`);
    setInformacoes(res.data)
    let div = document.querySelectorAll(".escondido")
    div[0].className = ""
  }
  function editar(e){
    if (editando.current == false){
      let div = document.querySelectorAll(".animalEditar")
      div[0].className = "row about-list animalEditar"
      let divInvisivel = document.querySelectorAll("#lista")
      divInvisivel[0].className = "row about-list invisivel"
      editando.current = true
      let divWarn = document.querySelectorAll(".editar")

    } else{
      let div = document.querySelectorAll(".animalEditar")
      div[0].className = "row about-list animalEditar invisivel"
      let divInvisivel = document.querySelectorAll("#lista")
      divInvisivel[0].className = "row about-list"
      editando.current = false
    }
  }

  async function excluir(e){
    swal({
      title: "Você tem certeza?",
      text: "Seu animal sera deletado permanentemente!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        let deletar=await api.delete(`/animais/${id}`);
        swal("Animal deletado com sucesso!", {
          icon: "success",
        }).then(()=>
        window.location.replace("/")
        );
      } else {
        swal("Ok, não deletamos seu animal!");
      }
    });
  }

  return (
    <>
      <section class="section about-section gray-bg" id="about">
        <div className="container bodyDog" id="cabecalho">
            <div id="sobreanimal">
              <div class="about-text go-to">
                <div class="avatarFoto">
                  <div class="about-avatar">
                    <div>
                    <img id="perfilcachorro" src={informacoes.avatar} />
                    </div>
                    <div className="escondido">
                    <Alert variant="success">
                      <Alert.Heading>Esperamos que tudo tenha se resolvido!</Alert.Heading>
                      <p>
                        Conte com a feedPet para ajudar seus animais!
                      </p>
                    </Alert>
                    </div>
                    {(informacoes.status === "Desaparecido") &&
                  <>
                    <div className="animalDesaparecido" data-tip data-for="registerTip">
                      <h2>Animal Desaparecido!</h2>
                      
                      <p>Você viu esse bichano? Entre em contato com
                        <Link to={`/perfil-usuario/${informacoes?.usuario[0].id}`} activeClassName="selected" className="link-drop"> {informacoes?.usuario[0].nome} </Link>
                        para ajuda-lo com informacoes!
                      </p>
                      <ReactTooltip id="registerTip" place="top" effect="solid" backgroundColor="white" textColor="black">
                        <p>Descrição - {desaparecido.descricao}</p>
                        <p>Local - {desaparecido.cidade}</p>
                      </ReactTooltip>
                      {(informacoes?.usuario[0].id === usuario) && <button className="btn" onClick={AnimalEncontrado}>Marcar como Encontrado</button>}
                    </div>
                  </>
                }
                  </div>
                </div>
                <div className="corpoPerfilAnimal">
                <div className="flexDiv">
                  <h3 class="dark-color">{informacoes.nome}</h3>
                {(usuario === dono.id)&&<>
                <button onClick={editar} className="btn editar">Editar <AiOutlineEdit/> </button>
                <button onClick={excluir} className="btn editar excluir">Excluir <FiDelete color="red"/> </button>
                </>}
                </div>
                {/* {((informacoes.tipo_animal == "Cachorro") && (
                  <>
                    <h6 class="theme-color lead">Um doguinho muito amoroso!</h6>
                    <p>
                      Calmo, dócil com crianças e outros animais. Está procurando um
                      lar amoroso pra chamar de seu!
                    </p>
                  </>
                )) || (<>
                  <h6 class="theme-color lead">Um gatinho muito fofo!</h6>
                  <p>
                    Calmo, dócil com crianças e outros animais. Está procurando um
                    lar amoroso pra chamar de seu!
                  </p>
                </>)} */}
               
               
                <div class="row about-list" id="lista">
                  <div class="col-md-6">
                    <div class="small">
                      <label>COR</label>
                      <p>{informacoes.cor}</p>
                    </div>
                    <div class="small">
                      <label>TUTOR</label>
                      <p>
                      <Link to={`/perfil-usuario/${dono.id}`} activeClassName="selected" className="link-drop"> {dono.nome} </Link>
                      </p>
                    </div>
                    <div class="small">
                      <label>RACA</label>
                      <p>{informacoes.raca}</p>
                    </div>
                    <div class="small">
                      <label>PORTE</label>
                      <p>{informacoes.porte}</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="small">
                      <label>ENDEREÇO</label>
                      <p>Visto em Indaial</p>
                    </div>
                    <div class="small">
                      <label>CASTRADO</label>
                      <p>Não</p>
                    </div>
                    <div class="small">
                      <label>PELO</label>
                      <p>Pelo curto</p>
                    </div>
                    <div class="small">
                      <label>SEXO</label>
                      <p>{informacoes.sexo}</p>
                    </div>
                  </div>
                 
              </div>
              {usuario===dono.id&&
              <div class="row about-list animalEditar invisivel">
                    <EdicaoAnimal informacao={informacoes} dono={dono} setinfo={setInformacoes}/>
              </div>  
              }
            </div>
            </div>

          </div>
          <div class="counter">
            <div class="row">
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" id="icones" data-to="500" data-speed="500">
                    <img src='https://i.imgur.com/qNhgLfw.png'></img>
                  </h6>
                  <p class="m-0px font-w-600">100 likes</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" id="icones" data-to="150" data-speed="150">
                    <img src='https://i.imgur.com/02MPWUK.png'></img>
                  </h6>
                  <p class="m-0px font-w-600">Alimentado {dados.comida}x</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" id="icones" data-to="850" data-speed="850">
                    <img src='https://i.imgur.com/9NbLHB6.png'></img>
                  </h6>
                  <p class="m-0px font-w-600">Dormiu em {dados.dormir} locais</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" id="icones" data-to="190" data-speed="190">
                    <img src='https://i.imgur.com/7UuTzkO.png'></img>
                  </h6>
                  <p class="m-0px font-w-600">Visto em Timbó</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="profile-content">
              <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                {usuario.length<1&&<div className="novaAtividade aviso"><p>Usuario não logado, para interagir com a agenda faça o 
                <Link to={`/login`} activeClassName="selected" className="link-drop"> Login!</Link>
                  </p></div>}
                  <ul className="timeline">
                    <AgendaAnimal />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
