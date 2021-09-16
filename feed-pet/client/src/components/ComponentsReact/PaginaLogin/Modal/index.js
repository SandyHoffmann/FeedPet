import { Modal,Button } from 'react-bootstrap';
import { useState } from "react";
import { FormLogin } from "../Login";

export function ModalLogin(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Formulario</Modal.Title>
          </Modal.Header>
          <Modal.Body><FormLogin fecharForm={handleClose}/></Modal.Body>
        </Modal>
      </>
    );
  }
  