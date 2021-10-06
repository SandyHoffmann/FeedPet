import React from "react";
import { api } from "../../../service";
import { useState, useEffect } from "react";
import gatokapa from "./gatokapa.jpg";
import "./styles.css"
export function FormCadastroEstilizado(){
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const [imagem,setImagem] = useState("")

    async function handleChange(e){
        const value = e.target.value;
        const nome = e.target.name;
        if (nome=="nome"){
            setNome(value)
        } else if (nome=="email"){
            setEmail(value)
        } else if (nome=="senha"){
            setSenha(value)
        } else if (nome=="avatar"){
            setImagem(e.target.files[0])
        }
        console.log(imagem)
    }
    
    async function handleSubmit(e){
        try {
            e.preventDefault();
            const formData = new FormData(e.target);

            const res = await api.post(`/usuarios/`, 
                                formData, {
                                    headers: {
                                        "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
                                        }
                                });
            console.log(res.data)
            setNome("")
            setEmail("")
            setSenha("")   
            setImagem("")   
            window.location.replace("/login");    
        } catch (error) {
            console.log(error)
        }
    }

        return (
            <>
            <div className="grandecaixa">
            <div className="caixaimagem"><img src={gatokapa} className="bluhrit"></img></div>
            <div className="container caixa">
                <form onSubmit={handleSubmit} className="caixaElemento  cadastroCaixa" enctype="multipart/form-data"> 
                <h1>Cadastre-se</h1>
                <br/>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-cadastro" id="nome" name="nome" aria-describedby="Nome" value={nome} onChange={handleChange} placeholder="Nome"/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-cadastro" id="email" name="email" aria-describedby="Email" value={email} onChange={handleChange} placeholder="Email"/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="text" className="form-cadastro" id="senha" name="senha" aria-describedby="Senha" value={senha} onChange={handleChange} placeholder="Senha"/>
                </div>
                <input type="file" name="avatar" className="form-cadastro img inputfile" onChange={handleChange}/>
                <br/>
                <button type="submit" className="btn botaoRosa">Enviar</button>
                </form>   
                <br/>
                </div>      
               </div>    
            </>
        );

}
