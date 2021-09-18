import React from "react";
import { api } from "../../../service";
import { useState, useEffect } from "react";

export function FormCadastro(){
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    
    async function handleChange(e){
        const value = e.target.value;
        const nome = e.target.name;
        if (nome=="nome"){
            setNome(value)
        } else if (nome=="email"){
            setEmail(value)
        } else if (nome=="senha"){
            setSenha(value)
        }
    }
    
    async function handleSubmit(e){
        try {
            e.preventDefault();
            const res = await api.post(`/usuarios/`, 
                                {
                                    "nome":nome,
                                    "email":email,
                                    "senha":senha 
                                });
            console.log(res.data)
            setNome("")
            setEmail("")
            setSenha("")      
        } catch (error) {
            console.log(error)
        }
    }

        return (
            <>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" id="nome" name="nome" aria-describedby="Nome" value={nome} onChange={handleChange} placeholder="Nome"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" id="email" name="email" aria-describedby="Email" value={email} onChange={handleChange} placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="text" className="form-control" id="senha" name="senha" aria-describedby="Senha" value={senha} onChange={handleChange} placeholder="Senha"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>            
            </>
        );

}
