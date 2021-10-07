import './styles.css';
import React, { Component, useEffect, useState } from 'react';
import { api } from "../../../../service";
import { ChatBox } from '../ChatBox';
import { ChatMsg } from '../ChatMsg';
import { ChatForm } from '../ChatForm';
import { ChatCriar } from '../ChatCriar';
import { FaUserCircle } from "react-icons/fa";
import { socket } from '../../../../service/chat';
import {BiArrowBack} from "react-icons/bi";
import dogFoto from '../../../../assets/dogchat.gif'
import { NotFound } from '../../notFound';

const jwt = require('jsonwebtoken');
const moment = require('moment'); 


export function Chat(props) {
    const [chats, setChats] = useState([])
    const [msg, setMsgs] = useState([])
    const [user, setUser] = useState([])
    const [enviar, setEnviar] = useState('')
    const [atualGrupo, setatualGrupo] = useState([])
    useEffect(async () => {
        const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET).sub
        let lista = []
        try {
            const res = await api.get("/chats/");
            console.log('chats = '+ chats)
            const chatsNovos = res.data[0]
            const ultimasMsg = res.data[1]
            for (let x = 0; x<chatsNovos.length; x++){
                console.log("entrou aqui")
                lista.push(Object.assign(chatsNovos[x],{ultimaMsg : ultimasMsg[x]?ultimasMsg[x]:{conteudo:"Nenhuma Mensagem"}}))
            }

            let data
            lista = lista.sort(function (a, b) {
                console.log(a.ultimaMsg.createdAt)
                console.log(b.ultimaMsg.createdAt)
                data = a.ultimaMsg.created_at
                    if (moment(a.ultimaMsg.createdAt) > moment(b.ultimaMsg.createdAt)) {
                        return 1;
                    }
                    if (moment(a.ultimaMsg.createdAt) < moment(b.ultimaMsg.createdAt)) {
                        return -1;
                    }
                    return 0;
              });

            socket.auth = {userId:token}
            socket.connect()
            setChats(lista)
            setUser(token => token)
            const chatsIds = res.data[0].map(chat => chat.id)
            socket.emit("add chats",chatsIds)
            socket.on("nova mensagem",mensagem => {
                const msgData = mensagem
                if (socket.auth.userId !== msgData.id_usuario){
                    setMsgs(msg => [...msg,msgData])
                }
            })
            socket.on("chat",chat => {
                    const chatNovo = chat
                    setChats(chats => [chatNovo,...chats])
                    console.log(chats)
            })
            return () => {socket.off("nova mensagem")
                        socket.off("chat")}

        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(async () => {
        let mensagem = msg[msg.length-1]
        console.log(mensagem)
        console.log("entrou no use effect")
        if (mensagem){
            let chatFiltrado = chats.filter(chat => chat.id === mensagem.id_chat)
            console.log(chats)
            if (chatFiltrado.length>0){
                let chatObjeto = chatFiltrado[0]
                console.log("chat encontrado: "+JSON.stringify(chatObjeto))
                let chatCriado = Object.assign(chatObjeto, {ultimaMsg:{conteudo:mensagem.conteudo}})
                let chatsAtualizados = [chatCriado,...chats.filter(chat => chat.id !== mensagem.id_chat)]
                setChats(chatsAtualizados)
            }
        }
    },[msg])

    async function handleClick(msg) {
        console.log(chats)
        console.log(msg.target.id)
        const res = await api.get(`/chats/${msg.target.id}`);
        setMsgs(res.data[0])
        setEnviar(msg.target.id)
        setatualGrupo(res.data[1])
        socket.emit("send message",res.data[0])
        if (window.innerWidth<850){
            let elementoChat = document.querySelectorAll('.chat_fp__elemento')
            elementoChat[0].className = "chat_fp__elemento invisivel"
            let elementoMsg = document.querySelectorAll('.mensagens')
            elementoMsg[0].className = "mensagens visivel"
        }            
    }

    function voltarClick(){
        let elementoChat = document.querySelectorAll('.chat_fp__elemento')
        elementoChat[0].className = "chat_fp__elemento visivel"
        let elementoMsg = document.querySelectorAll('.mensagens')
        elementoMsg[0].className = "mensagens invisivel"
    }

    return (
        <div className="chat_fp_body">
            <div className="chat_fp">
                <div className="chat_fp__elemento">
                <div className="textoCabecalho">
                        <div className="icone">
                            <FaUserCircle size={45} color="white" />
                        </div>
                        <div>            
                            <ChatCriar pessoa={user} setchats={setChats} chats={chats}/>
                        </div>
                </div>

                    <div className="chat_fp__elemento_cards">            
                        {chats.map(chat => <ChatBox chat={chat} key={chat.id} onClick={handleClick}></ChatBox>)}
                    </div>
                </div>
              
                <div className="mensagens">
                <div className="texto">
                        <i><BiArrowBack size="30" color="white" onClick={voltarClick} className="voltar"></BiArrowBack></i>
                        <div className="icone">
                            <FaUserCircle size={60} color="white" />
                        </div>
                        <div className="NomePessoa">
                            {atualGrupo?.usuario?.slice(0,3).map(pessoa => pessoa.id!==user.id&&<p key={pessoa.id}>{pessoa.email}&nbsp;</p>)}
                            {(atualGrupo?.usuario?.length>3)&&<p>...</p>}
                        </div>
                </div>
                    <div className="mensagens__corpo">
                        {msg.length<1&&
                        <NotFound titulo="Não há mensagens!" img={dogFoto}></NotFound>
                        }
                        {msg?.map(mensagem => (mensagem.id_usuario === socket.auth.userId) ? (<ChatMsg className="direita" mensagem={mensagem} key={mensagem.id}/>) : (<ChatMsg className="esquerda" mensagem={mensagem} key={mensagem.id}/>))}
                    </div>
                    <div className="mensagens__mandar">
                        <ChatForm enviar={enviar} setarMsg = {setMsgs} msg = {msg} user={socket.auth} setarChat={setChats} chats={chats}></ChatForm>
                    </div>
                </div>
            </div>

        </div>
    );
}
