import React, { Component, useEffect, useReducer, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { api } from "../../../../service";
import { ChatBoxEmail } from '../ChatBoxEmail';
import "./styles.css"

export function ChatCriar(props) {
    const [pessoas, setPessoas] = useState([]);
    const [pessoasBD, setPessoasBD] = useState([]);
    const [show, setShow] = useState(false);
    const [pessoasDoChat, setpessoasDoChat] = useState([]);
    const [ultimoEl, setUltimoEl] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(async () => {
        try {
            const res = (await api.get("/usuarios")).data;
            setPessoas(res)
            setPessoasBD(res.slice())
        } catch (error) {
            console.log(error)
        }

    }, [])

    function handleClick(e){
        let conferirOpcaoSelecionada = e.target.options[e.target.selectedIndex].disabled
        if (e.target.options.length===2 && ultimoEl===false && !conferirOpcaoSelecionada){
            console.log("setou")
            setUltimoEl(true)
        } else if(ultimoEl){
            handleChange(e)
            console.log(e.target.options[0])
            e.target.options[0].checked = true
            setUltimoEl(false)
        }
    }

    function handleChange(e){
        setPessoas((pessoasBD) => [...pessoasBD])
        const novo_chat = [...pessoasDoChat,{id:e.target.value,nome:e.target.options[e.target.selectedIndex].text}]
        setpessoasDoChat(novo_chat)
        let index
        for (let p of novo_chat){
            index = pessoas.indexOf(pessoasBD.find(pessoa => (pessoa.id === p.id)))
            if (index!==-1) pessoas.splice(index,1); 
        }
        setPessoas((pessoas) => ([...pessoas]))
    }
    function handleClickExcluir(e){
        let elementoExcluir = pessoasDoChat.find(pessoa => pessoa.id = e.target.id)
        let indiceElementoExcluir = pessoasDoChat.indexOf(elementoExcluir)
        if (indiceElementoExcluir!==-1) pessoasDoChat.splice(indiceElementoExcluir,1)
        setpessoasDoChat((pessoasDoChat) => ([...pessoasDoChat]))
        setPessoas([...pessoas,pessoasBD.find(pessoa => pessoa.id == elementoExcluir.id)])
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
                <div className="chat__email__input"> 
                    <select name="pessoa" id="pessoas" onChange={handleChange} onClick={handleClick}>
                        <option disabled selected value> -- select an option -- </option>
                        {pessoas?.map(pessoa => <option value={pessoa.id} name={pessoa.name}>{pessoa.email}</option>)}
                    </select>
                </div>
                <div className="chat__email__box">
                    {pessoasDoChat?.map(pessoa => <ChatBoxEmail email={pessoa.nome} key={pessoa.id} id={pessoa.id} funcaoexcluir={handleClickExcluir}/>)}
                </div>
            </Modal.Body>
        </Modal>
        </>

    )
}