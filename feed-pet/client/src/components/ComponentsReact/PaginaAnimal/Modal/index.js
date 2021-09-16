import { FormAnimal } from "../FormularioAnimal";
import { Modal,Button } from 'react-bootstrap';
import { useState } from "react";

export function ModalAnimal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Cadastrar Animal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Formulario</Modal.Title>
          </Modal.Header>
          <Modal.Body><FormAnimal setarCard={props.setarCard}/></Modal.Body>
        </Modal>
      </>
    );
  }
  