import React, { Component, useEffect, useReducer, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { api } from "../../../../service";
import { ChatBoxEmail } from '../ChatBoxEmail';
import Select from 'react-select';
import { RiChatNewLine } from 'react-icons/ri';
import { socket } from '../../../../service/chat';
import { VerificarErros } from "../../../../errorHandling";
import "./styles.css"

export function ChatCriar(props) {
    const [pessoas, setPessoas] = useState([]);
    const [show, setShow] = useState(false);
    const [pessoasDoChat, setpessoasDoChat] = useState([]);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(async () => {
        try {
            const res = (await api.get("/usuarios/chat-users")).data;
            setPessoas(res)
        } catch (error) {
            console.log(error)
        }

    }, [])

    function handleChange(e) {
        setpessoasDoChat(e)

    }

    async function handleSubmit() {
        try {
            const nomeChat = pessoasDoChat.length<2 ? pessoasDoChat[0].nome : nome
            console.log(nomeChat)
            let verificar = true
            console.log(pessoasDoChat)
            if (!nome) {
                if (pessoasDoChat.length<2){
                    console.log(props.chats)
                    props.chats.filter(
                        chat => chat.usuario.length === 2 &&
                            chat.usuario.map(
                                usuarioChat => usuarioChat.id == pessoasDoChat[0].id &&
                                    (verificar = false)
                            )
                    )
                }
            }
            if (verificar) {
                console.log(pessoasDoChat)
                const usuarios = pessoasDoChat.map(pessoa => pessoa.id)
                const send = await api.post("/chats/", {
                    "nome": nomeChat,
                    descricao,
                    usuarios
                })
                let chat = send.data
                chat = Object.assign(chat, { ultimaMsg: { conteudo: "Nenhuma Mensagem" } })
                let chats = props.chats
                props.setchats(chats => { return [chat, ...chats] })
                socket.emit("add chat", chat, usuarios)
                handleClose()
            } else {
                let erro = { 'errors': [{ 'msg': "Você já tem uma conversa com este usuário!", 'param': 'chat' }] }
                VerificarErros(erro)
            }
        } catch (error) {
            console.log(error)
            if (pessoasDoChat.length === 0) {
                let erro = { 'errors': [{ 'msg': "Escolha algum usuário!", 'param': 'chat' }] }
                VerificarErros(erro)
            } if (error.response) {
                let erros = error.response.data
                console.log(erros)
                VerificarErros(erros)
            }
        }

    }

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <RiChatNewLine></RiChatNewLine>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Criar Conversa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="chat__email__input">
                        <Select
                            isMulti
                            name="colors"
                            options={pessoas?.map(pessoa => ({ 'id': pessoa.id, 'value': pessoa.id, 'nome': pessoa.nome, 'email': pessoa.email, 'label': pessoa.email }))}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="chat__email__box">
                        <div className="chat__email__box__inputs">
                            {(pessoasDoChat.length > 1) &&
                                <>
                                    <div className="form-err nome-err">
                                    <label htmlFor="nome">
                                        Nome do Grupo:
                                    </label>
                                        <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)}></input>
                                    </div>
                                    <div className="form-err descricao-err">
                                        <label>
                                            Descricao do Grupo:
                                        </label>
                                        <input type="text" name="descricao" value={descricao} onChange={e => setDescricao(e.target.value)}></input>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="form-err chat-err"></div>
                        <button onClick={handleSubmit}>Enviar</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}