import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import alerta from "../../../../assets/alerta.png";
import "./styles.css";
import { api } from "../../../../service";
import { Carousel } from "react-bootstrap";
import { SliderAnimal } from "../SliderAnimal";
import DateTimePicker from 'react-datetime-picker';
import { FormAnimal } from "../../PaginaAnimal/FormularioAnimal";

const jwt = require('jsonwebtoken');

export function ModalGerarAlertaMenu(props) {
  const [show, setShow] = useState(false);
  const [animais, setAnimais] = useState([]);
  const [id_animal, setIdAnimal] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data_desaparecimento, setDataDesaparecimento] = useState(new Date());
  const [local, setLocal] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(async () => {
    try {
      const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
      const res = await api.get(`/usuarios/animais/${token.sub || 'undefined'}`);
      const animais = res.data.filter(animal => animal.status !== "Desaparecido");
      console.log(animais)
      setAnimais(animais)

    } catch (error) {
      console.log(error)
    }
  }, [])

  async function handleSubmit(e){
    try {
        e.preventDefault();
        if (id_animal.length>0){
          const res = await api.post(`/alertas/${id_animal}`, 
                              {descricao,dataDesaparecimento:data_desaparecimento,local}
                              );
          console.log(res.data)
          setIdAnimal("")
          setDescricao("")
          setDataDesaparecimento(new Date())
          setLocal("")
          setShow(false)
        } else{
          alert("Selecione um animal, ou crie um!")
        }
    } catch (error) {
        let erros = error.response.data
        console.log(erros)
        // VerificarErros(erros)
    }
    
    }
    function handleClick(e){
      if (e.target.name === "irParaFormAnimal"){
        let div = document.querySelectorAll(".modalalertaanimalform")
        let divVisivel = document.querySelectorAll(".voltaranimalalerta")
        div[0].className = "modalalertaanimalform invisivelAlerta"
        divVisivel[0].className = "voltaranimalalerta visivelAlerta"
      } else {
        let div = document.querySelectorAll(".voltaranimalalerta")
        let divVisivel = document.querySelectorAll(".modalalertaanimalform")
        div[0].className = "voltaranimalalerta invisivelAlerta"
        divVisivel[0].className = "modalalertaanimalform visivelAlerta"
      }
}
  return (
    <>
      <Button
        classNameName="btn btn-danger"
        id="botaogeraralerta"
        onClick={handleShow}
      >
        {" "}
        <img src={alerta}></img>
      </Button>
      <Modal show={show} onHide={handleClose} data-toggle="modal" size="lg">
        <Modal.Header closeButton>
          <Modal.Title
            className="example-modal-sizes-title-lg"
            id="titulo-modal"
          >
            Cadastrar animal desaparecido
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalalertaanimalform">

            <div className="sliderAnimal">
              <Carousel id="carouselAnimaisPessoa" interval={null} variant="dark">
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
                      <div className="animalerta" id="form">
                        <input type="radio" value={animal.id} name="radiotipo1" id={'radiotipo1'+animal.id} onClick={e => { if (id_animal === e.target.value){e.target.checked = false ; setIdAnimal("")}else{setIdAnimal(e.target.value) }}}></input>
                        <label className="form-check-label" htmlFor={'radiotipo1'+animal.id} className="animalSelecionado">
                        </label>
                      </div>
                      <p>{animal.nome}</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                })}
              </Carousel>
            </div>
            <div className="corpoModal">
              <div className="modalFlex">

                <div className="areaInputs">
                  <form onSubmit={handleSubmit}>
                    <div className="formularioInteiro">
                      <label htmlFor="local"></label>
                      <input type="text" name="local" placeholder="Local do Desaparecimento" onChange={e => { setLocal(e.target.value) }} value={local} />
                      <label htmlFor="email"></label>

                      <label htmlFor="descricao"></label>
                      <textarea type="textarea" name="descricao" placeholder="Descricao" onChange={e => { setDescricao(e.target.value) }} value={descricao} />
                    </div>
                    <DateTimePicker
                      onChange={setDataDesaparecimento}
                      value={data_desaparecimento}
                    />
                    <button type="submit" className="btn botaoRosa botaoalertanimal">Criar Alerta</button>

                  </form>

                  <br />
                  <p className="avisoalerta">Ainda não possui um animal registrado?<br /> <a href="#" name = "irParaFormAnimal" onClick={handleClick}>Clique aqui</a> para fazer um rapidamente!</p>

                </div>
              </div>
            </div>
          </div>
          <div className="voltaranimalalerta invisivelAlerta">
                    <a onClick={handleClick}>Voltar</a>
                    <FormAnimal alertaAnimal="alerta" cardAlerta={setAnimais} animaisAlerta={animais}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
