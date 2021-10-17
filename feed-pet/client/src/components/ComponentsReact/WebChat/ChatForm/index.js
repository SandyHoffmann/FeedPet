import React, { Component, useEffect, useState } from 'react';
import { api } from "../../../../service";
import { BiSearchAlt2 } from 'react-icons/bi';
import { socket } from '../../../../service/chat';
import { Formik } from 'formik';
import { VerificarErros } from "../../../../errorHandling";


export function ChatForm(props) {
    const [msgConteudo, setmsgConteudo] = useState([])

    function handleChange(e){
        setmsgConteudo(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const enviar = await api.post(`/chats/mensagem/${props.enviar}`,{conteudo:msgConteudo});
            console.log(enviar.data)
            console.log(props.user.userId)
            console.log(enviar.data.id_usuario)
            if (props.user.userId === enviar.data.id_usuario){
                console.log("entrou")
                props.setarMsg([...props.msg,enviar.data])
                socket.emit("send message",enviar.data)
                let mensagem = enviar.data
                let chats = props.chats
                let chatFiltrado = chats.filter(chat => chat.id === mensagem.id_chat)
                if (chatFiltrado.length>0){
                    let chatObjeto = chatFiltrado[0]
                    console.log("chat encontrado: "+JSON.stringify(chatObjeto))
                    let chatCriado = Object.assign(chatObjeto, {ultimaMsg:{conteudo:mensagem.conteudo}})
                    let chatsAtualizados = [chatCriado,...chats.filter(chat => chat.id !== mensagem.id_chat)]
                    props.setarChat(chatsAtualizados)
                }
                console.log("entrou no chat form")
            }
            setmsgConteudo("")
            let erros = document.querySelectorAll(".form-err")
            erros[0].innerHTML=""
        } catch (error) {
            if (error.response){
                let erros = error.response.data
                console.log(erros)
                VerificarErros(erros)
            }
            console.log(error)
        }
    }
    return (
        <>
         <div className="conteudo-err form-err flexDiv">
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mensagens__mandar__inputs conteudo-err form-err">
                    <input type="text" onChange={handleChange} value={msgConteudo} className="inputUsuario" name="conteudo"></input>
                    <button type="submit"><BiSearchAlt2/></button>
                </div>
               
            </form >

        </>
    )
}