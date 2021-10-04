import './styles.css';
import React, { Component, useEffect, useState } from 'react';
import { api } from "../../../../service";
import { ChatBox } from '../ChatBox';
import { ChatMsg } from '../ChatMsg';
import { ChatForm } from '../ChatForm';
import { ChatCriar } from '../ChatCriar';
import { FaUserCircle } from "react-icons/fa";

const jwt = require('jsonwebtoken');


export function Chat(props) {
    const [chats, setChats] = useState([])
    const [msg, setMsgs] = useState([])
    const [user, setUser] = useState([])
    const [enviar, setEnviar] = useState('')
    const [atualGrupo, setatualGrupo] = useState([])

    useEffect(async () => {
        const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
        try {
            const res = await api.get("/chats/");
            setChats(res.data[0])
            setUser(token.sub)

        } catch (error) {
            console.log(error)
        }

    }, [])

    async function handleClick(msg) {
        const res = await api.get(`/chats/${msg.target.id}`);
        console.log(res.data)
        setMsgs(res.data[0])
        setEnviar(msg.target.id)
        setatualGrupo(res.data[1])
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
                        <div className="icone">
                            <FaUserCircle size={60} color="white" />
                        </div>
                        <div className="NomePessoa">
                            {atualGrupo?.usuario?.slice(0,3).map(pessoa => pessoa.id!==user.id&&<p>{pessoa.email}&nbsp;</p>)}
                            {(atualGrupo?.usuario?.length>3)&&<p>...</p>}
                        </div>
                </div>
                    <div className="mensagens__corpo">
                        {msg?.map(mensagem => (mensagem.id_usuario === user) ? (<ChatMsg className="direita" mensagem={mensagem} key={mensagem.id}/>) : (<ChatMsg className="esquerda" mensagem={mensagem} key={mensagem.id}/>))}
                    </div>
                    <div className="mensagens__mandar">
                        <ChatForm enviar={enviar} setarMsg = {setMsgs} msg = {msg}></ChatForm>
                    </div>
                </div>
            </div>

        </div>
    );
}
