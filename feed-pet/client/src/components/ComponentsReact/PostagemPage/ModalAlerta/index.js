import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import alerta from "../../../../assets/alerta.png";
import "./styles.css";
import dogcard from "../../../../assets/dogito.jpeg";

export function ModalAlerta(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        classNameName="btn btn-danger"
        id="botaoalerta"
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
            Animais desaparecidos na sua área
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4" id="card-desaparecido">
                  <div className="card mx-30" id="cardInteiro">
                    <img src={dogcard} className="card-img-top" alt="..." />
                    <div className="card-body" id="descricaocard">
                      <h5 className="card-title">Bolinha</h5>
                      <h6>SRD</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" id="card-desaparecido">
                  <div className="card mx-30" id="cardInteiro">
                    <img src={dogcard} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Fred</h5>
                      <h6>Golden</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" id="card-desaparecido">
                  <div className="card mx-30" id="cardInteiro">
                    <img src={dogcard} className="card-img-top" alt="..." />
                    <div className="card-body" id="descricaocard">
                      <h5 className="card-title">Lolla</h5>
                      <h6>Labrador</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4" id="card-desaparecido">
                  <div className="card mx-30" id="cardInteiro">
                    <img src={dogcard} className="card-img-top" alt="..." />
                    <div className="card-body" id="descricaocard">
                      <h5 className="card-title">Tom</h5>
                      <h6>SRD</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" id="card-desaparecido">
                  <div className="card mx-30" id="cardInteiro">
                    <img src={dogcard} className="card-img-top" alt="..." />
                    <div className="card-body" id="descricaocard">
                      <h5 className="card-title">Theo</h5>
                      <h6>Shih-tzu</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" id="card-desaparecido">
                  <div className="card mx-30" id="cardInteiro">
                    <img src={dogcard} className="card-img-top" alt="..." />
                    <div className="card-body" id="descricaocard">
                      <h5 className="card-title">Luna</h5>
                      <h6>Pastor Alemão</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Navegação de página exemplo">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Anterior</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Próximo">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Próximo</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
