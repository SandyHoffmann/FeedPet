import { useState, useEffect } from "react";
import { Input } from "../../FormElements/Input";
import { api } from "../../../../../service";
import { Modal,Button } from 'react-bootstrap';

export function FormularioPostagem(props){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [titulo,setTitulo] = useState("")
    const [conteudo,setConteudo] = useState("")

    function handleChange(e){
        const value = e.target.value;
        const nome = e.target.name;
        console.log(nome)
        if (nome == "conteudo"){
            setConteudo(value)
        } 
        if (nome == "titulo"){
            setTitulo(value);
        } 
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            // let token = jwt.decode(localStorage.getItem("token"),secret).sub
            // console.log(token)
            const post = await api.post(`/usuarios/postagens/${'ed39d86e-7577-4c2c-8ba7-2a47343eac17'}`,
                {
                    "titulo": titulo,
                    "conteudo":conteudo
                }
            )
            setTitulo("")
            setConteudo("")
            
            props.addPost([
                post.data,
                ...props.postagens
            ])
            handleClose()

        } catch (error) {
            console.log(error)
        }
    }

    
    return(
        <>
          <Button variant="primary" onClick={handleShow}>
            Cadastrar Postagem
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Formulario</Modal.Title>
            </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit}>
                <Input handleChange={handleChange} nome={titulo} tipo = "titulo"></Input>
                <Input handleChange={handleChange} nome={conteudo} tipo = "conteudo"></Input>
                <button>Enviar</button>
            </form>
          </Modal.Body>
        </Modal>
        </>
    )
}