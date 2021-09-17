import { Modal,Button } from 'react-bootstrap';
import { useState } from "react";
import { FormPostagem } from "../PostagemForm";

export function ModalPostagem(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Cadastrar Postagem
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Formulario</Modal.Title>
          </Modal.Header>
          <Modal.Body><FormPostagem setarPost={props.setarPost} fecharForm={handleClose}/></Modal.Body>
        </Modal>
      </>
    );
  }
  