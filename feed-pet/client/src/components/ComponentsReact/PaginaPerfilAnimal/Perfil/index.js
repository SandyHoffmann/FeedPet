import "./styles.css";
import imgpost from "../../../../assets/icone1.png";
import imgdog from "../../../../assets/doguinho.jpg"
import { useState, useEffect } from "react";
import { api } from "../../../../service";
import { Link, useParams } from "react-router-dom";
import { AgendaAnimal } from "../Agenda";
import { FormularioAgenda } from "../FormularioAgenda";
import imgsrd from "../../../../assets/srd.jpg";
import love from "../../../../assets/likeredondo.png";
import food from "../../../../assets/food-bowl.png";
import bed from "../../../../assets/pet-bed.png";
import local from "../../../../assets/local.png";
import imggato from "../../../../assets/gato.jpg";
import { Alert } from "react-bootstrap";
const jwt = require('jsonwebtoken');



export function PaginaAnimal(props) {
  const [informacoes, setInformacoes] = useState([])
  const [desaparecido, setDesaparecido] = useState([])
  const [usuario, setUsuario] = useState([])
  const { id } = useParams();
  console.log(id)
  useEffect(async () => {
    try {
      const res = await api.get(`/animais/geral/${id}`);
      const informacao = res.data;
      console.log(informacao)
      setInformacoes(informacao)
      if (informacao.status==="Desaparecido"){
        const desaparecido = await api.get(`/alertas/${id}`);
        setDesaparecido(desaparecido.data)
      }
      const token = jwt.decode(localStorage.getItem("access-token"),process.env.REACT_APP_REFRESH_TOKEN_SECRET)
      setUsuario(token.sub)
    } catch (error) {
      console.log(error)
    }
  }, id)
  async function AnimalEncontrado(){
    const res = await api.put(`/alertas/${desaparecido.id}/${id}`);
    setInformacoes(res.data)
    let div=document.querySelectorAll(".escondido")
    div[0].className=""
  }
  return (
    <>
    <section class="section about-section gray-bg" id="about">
    <div className="container bodyDog" id="cabecalho">
      <div class="row align-items-center flex-row-reverse" id="boxsobrefotos">
        <div class="col-lg-6" id="sobreanimal">
          <div class="about-text go-to">
            <h3 class="dark-color">{informacoes.nome}</h3>
            {((informacoes.tipo_animal=="Cachorro")&&(
              <>
            <h6 class="theme-color lead">Um doguinho muito amoroso!</h6>
                        <p>
                          Calmo, dócil com crianças e outros animais. Está procurando um
                          lar amoroso pra chamar de seu!
                        </p>
              </>
            ))||( <>
              <h6 class="theme-color lead">Um gatinho muito fofo!</h6>
                          <p>
                            Calmo, dócil com crianças e outros animais. Está procurando um
                            lar amoroso pra chamar de seu!
                          </p>
                </>)}
            {(informacoes.status==="Desaparecido")&&
            <>
            <div className="animalDesaparecido">
              <h1>Animal Desaparecido!</h1>
              <h2>{desaparecido?.descricao}</h2>  
              <p>{desaparecido?.local}</p>
              <hr></hr>
              <p>Você viu esse bichano? Entre em contato com
              <Link to={`/perfil-usuario/${informacoes.usuario[0].id}`} activeClassName="selected" className="link-drop"> {informacoes.usuario[0].nome} </Link>
              para ajuda-lo com informacoes!
              </p>
              {(informacoes.usuario[0].id===usuario)&&<button className="btn botaoVerde" onClick={AnimalEncontrado}>Marcar como Encontrado</button>}
            </div>
            
          </>
            }
            <div className="escondido">
            <Alert variant="success">
              <Alert.Heading>Esperamos que tudo tenha se resolvido!</Alert.Heading>
              <p>
                Conte com a feedPet para ajudar seus animais!
              </p>
            </Alert>
            </div>
            <div class="row about-list" id="lista">
              <div class="col-md-6">
                <div class="small">
                  <label>COR</label>
                  <p>{informacoes.cor}</p>
                </div>
                <div class="small">
                  <label>TUTOR</label>
                  <p>Sem tutor</p>
                </div>
                <div class="small">
                  <label>{informacoes.raca}</label>
                  <p>SRD</p>
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
          </div>
        </div>
        <div class="col-md-6">
          <div class="about-avatar">
            <img id="perfilcachorro" src={informacoes.avatar} />
          </div>
        </div>
      </div>
      <div class="counter">
        <div class="row">
          <div class="col-6 col-lg-3">
            <div class="count-data text-center">
              <h6 class="count h2" id="icones" data-to="500" data-speed="500">
                <img src={love}></img>
              </h6>
              <p class="m-0px font-w-600">100 likes</p>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="count-data text-center">
              <h6 class="count h2" id="icones" data-to="150" data-speed="150">
              <img src={food}></img>
              </h6>
              <p class="m-0px font-w-600">Alimentado 7x</p>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="count-data text-center">
              <h6 class="count h2" id="icones" data-to="850" data-speed="850">
              <img src={bed}></img>
              </h6>
              <p class="m-0px font-w-600">Dormiu em 5 locais</p>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="count-data text-center">
              <h6 class="count h2" id="icones" data-to="190" data-speed="190">
              <img src={local}></img>
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
                  <ul className="timeline">
                  <AgendaAnimal/>
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
