import React, { Component, useEffect, useState } from 'react';
import { api } from "../../../../service";


export function ChatForm(props) {
    const [msgConteudo, setmsgConteudo] = useState([])

    function handleChange(e){
        setmsgConteudo(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const enviar = await api.post(`/chats/mensagem/${props.enviar}`,{conteudo:msgConteudo});
            console.log(enviar)
            props.setarMsg([...props.msg,enviar.data])
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            < form onSubmit={handleSubmit}>
                <div className="mensagens__mandar__inputs">
                    <input type="text" onChange={handleChange} value={msgConteudo}></input>
                    <button type="submit">Mandar</button>
                </div>
            </form >
        </>
    )
}