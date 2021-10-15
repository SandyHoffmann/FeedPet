import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./styles.css";
import dogcard from "../../../../assets/dogito.jpeg";
import { api } from "../../../../service";
import { Link } from "react-router-dom";
import { NotFound } from "../../notFound";
import img from "../../../../assets/dogalerta.gif";
export function ModalAlertaMenu(props) {
  const [show, setShow] = useState(false);
  const [animais, setAnimais] = useState([]);
  const [pag, setPag] = useState(1)

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)
    try {
      const res = await api.get(`/alertas/`);
      let animal = res.data.filter(alerta => alerta.concluido == false)
      console.log(animal)
      setAnimais(animal)
    } catch (error) {
      console.log(error)
    }
  
  };


  function Agrupar(animal,pag){
    let listNova = []
        for (let e = 0; e < animal.length-1; e+=3) {
          listNova.push(animal.slice(e,(e+3)))
        }
        if (listNova.length<animal.length/3){
          listNova.push(animal.slice(listNova.length*3,animal.length))
        }
    console.log(listNova)
    return listNova.slice(pag-1,pag)
  }
  return (
    <>
      <Button
        classNameName="btn btn-danger"
        onClick={handleShow}
      >
        {" "}
        <img src='https://i.imgur.com/UqhtYBz.png' className="imagemmenu"></img>
      </Button>
      <Modal show={show} onHide={handleClose} data-toggle="modal" size="lg">
        <Modal.Header closeButton>
          <Modal.Title
            className="example-modal-sizes-title-lg"
            id="titulo-modal"
          >
            Animais desaparecidos na sua área
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {animais.length===0 && <NotFound titulo="Não há animais perdidos na sua região" img={img}/> }
        {Agrupar(animais,pag).map(petList => 
         <div className="wrapper">
         <div className="container">
           <div className="row">
                {petList.map(pet=>{return (<div className="col-md-6 col-lg-4" id="card-desaparecido">
                 <div className="card mx-30" id="cardInteiro">
                   <img src={pet.animal.avatar} className="card-img-top" alt="..." />
                   <div className="card-body" id="descricaocard">
                     <h5 className="card-title">{pet.animal.nome}</h5>
                     <h6>SRD</h6>
                     <p className="card-text">{pet.descricao}</p>

                <Link to={`/perfil/${pet.animal.id}`} id={pet.animal.id} activeClassName="selected" className="link-drop" onClick={e => {setShow(false);}}>Perfil</Link>

                   </div>
                 </div>
               </div>)
                
                })} 
                </div>
            </div>
          </div>       
        )}
        <nav aria-label="Navegação de página exemplo">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" aria-label="" onClick={e => pag>1 && setPag(pag => pag-1)}>
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Anterior</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" aria-label="Próximo" onClick={e => (pag*(animais.length/3)<animais.length)&&setPag(pag => pag+1)}>
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Próximo</span>
                    </a>
                  </li>
                </ul>
              </nav>
         
        </Modal.Body>
      </Modal>
    </>
  );
}
