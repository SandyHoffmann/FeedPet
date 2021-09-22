import { FormAnimal } from "../FormularioAnimal";
import { Modal,Button } from 'react-bootstrap';
import { useState } from "react";
import "./styles.css"
export function ModalAnimal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className="botaoModal">
          <Button variant="primary" className="botaoModalTag botaoCor" onClick={handleShow}>
            Cadastrar Animal
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Formulario</Modal.Title>
          </Modal.Header>
          <Modal.Body><FormAnimal setarCard={props.setarCard} fecharForm={handleClose}/></Modal.Body>
        </Modal>
      </>
    );
  }
  