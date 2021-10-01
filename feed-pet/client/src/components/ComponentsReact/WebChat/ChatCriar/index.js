import React, { Component, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { api } from "../../../../service";


export function ChatCriar(props) {
    const [pessoas, setPessoas] = useState([])
    const [show, setShow] = useState(false);
    const [pessoasDoChat, setpessoasDoChat] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(async () => {
        try {
            const res = await api.get("/usuarios");
            setPessoas(res.data)

        } catch (error) {
            console.log(error)
        }

    }, [])

    function handleChange(e){
        let nome = e.target.options[e.target.selectedIndex].text
        console.log(nome)
        console.log(pessoas.map( pessoa => (pessoa.email===nome)?null:pessoa.email))
        // setPessoas(pessoas.map( pessoa =>{if(pessoa.id==!props.pessoa.id){return pessoa}}))
        setpessoasDoChat([...pessoasDoChat,{id:e.target.value,nome:e.target.options[e.target.selectedIndex].text}])
    }

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            +
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Criar Conversa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <select name="pessoa" id="pessoas" onChange={handleChange}>
                    {pessoas.map(pessoa => <option value={pessoa.id} name={pessoa.name}>{pessoa.email}</option>)}
                </select>
                <div>
                    {pessoasDoChat?.map(pessoa => <p>{pessoa.nome}</p>)}
                </div>
            </Modal.Body>
        </Modal>
        </>

    )
}