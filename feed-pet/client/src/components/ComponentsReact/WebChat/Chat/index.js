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
const jwt = require('jsonwebtoken');


export function Chat(props) {
    const [chats, setChats] = useState([])
    const [msg, setMsgs] = useState([])
    const [user, setUser] = useState([])
    const [enviar, setEnviar] = useState('')
    const [atualGrupo, setatualGrupo] = useState([])
    useEffect(async () => {
        const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET).sub
        try {
            const res = await api.get("/chats/");
            setChats(res.data[0])
            setUser(token => token)
            socket.auth = {userId:token}
            socket.connect()
            const chatsIds = res.data[0].map(chat => chat.id)
            socket.emit("add chats",chatsIds)
            socket.on("nova mensagem",mensagem => {
                const msgData = mensagem
                console.log(socket.auth.userId)
                console.log(msgData.id_usuario)
                if (socket.auth.userId !== msgData.id_usuario){
                    console.log("aqq")
                    setMsgs(msg => [...msg,msgData])
                }
            })
            return () => {socket.off("nova mensagem")}
        } catch (error) {
            console.log(error)
        }
    }, [])

    async function handleClick(msg) {
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
                    <div>            
                        <ChatCriar pessoa={user} setchats={setChats} chats={chats}/>
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
                            {atualGrupo?.usuario?.slice(0,3).map(pessoa => pessoa.id!==user.id&&<p>{pessoa.email}&nbsp;</p>)}
                            {(atualGrupo?.usuario?.length>3)&&<p>...</p>}
                        </div>
                </div>
                    <div className="mensagens__corpo">
                        {msg?.map(mensagem => (mensagem.id_usuario === socket.auth.userId) ? (<ChatMsg className="direita" mensagem={mensagem} key={mensagem.id}/>) : (<ChatMsg className="esquerda" mensagem={mensagem} key={mensagem.id}/>))}
                    </div>
                    <div className="mensagens__mandar">
                        <ChatForm enviar={enviar} setarMsg = {setMsgs} msg = {msg} user={socket.auth}></ChatForm>
                    </div>
                </div>
            </div>

        </div>
    );
}
