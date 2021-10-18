import { Modal,Button } from 'react-bootstrap';
import { useState } from "react";
import { FormPostagem } from "../PostagemForm";
import Sky from 'react-sky';

import "./styles.css"

export function ModalPostagem(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        
        <div className="divformPost">
        <button className="btn botaopost" onClick={handleShow}>
          Cadastrar Postagem
        </button>
        
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastrar Postagem</Modal.Title>
          </Modal.Header>
          <Modal.Body><FormPostagem setarPost={props.setarPost} fecharForm={handleClose}/></Modal.Body>
        </Modal>
      </>
    );
  }
  