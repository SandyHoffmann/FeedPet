import './styles.css';
import React, { Component, useEffect, useState } from 'react';
import { api } from "../../../../service";
import { ChatBox } from '../ChatBox';
import { ChatMsg } from '../ChatMsg';
import { ChatForm } from '../ChatForm';
import { ChatCriar } from '../ChatCriar';
const jwt = require('jsonwebtoken');


export function Chat(props) {
    const [chats, setChats] = useState([])
    const [msg, setMsgs] = useState([])
    const [user, setUser] = useState([])
    const [enviar, setEnviar] = useState('')

    useEffect(async () => {
        const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
        try {
            const res = await api.get("/chats/");
            setChats(res.data)
            setUser(token.sub)

        } catch (error) {
            console.log(error)
        }

    }, [])

    async function handleClick(msg) {
        const res = await api.get(`/chats/${msg.target.id}`);
        setMsgs(res.data)
        setEnviar(msg.target.id)

    }

    return (
        <div className="chat_fp_body">
            <div className="chat_fp">
                <div className="chat_fp__elemento">
                    <div>            
                        <ChatCriar/>
                    </div>
                    <div className="chat_fp__elemento_cards">            
                        {chats.map(chat => <ChatBox chat={chat} key={chat.id} onClick={handleClick}></ChatBox>)}
                    </div>
                </div>
                <div className="mensagens">
                    <div className="mensagens__corpo">
                        {msg?.map(mensagem => (mensagem.id_usuario === user) ? (<ChatMsg className="direita" mensagem={mensagem} />) : (<ChatMsg className="esquerda" mensagem={mensagem} />))}
                    </div>
                    <div className="mensagens__mandar">
                        <ChatForm enviar={enviar} setarMsg = {setMsgs} msg = {msg}></ChatForm>
                    </div>
                </div>
            </div>

        </div>
    );
}
