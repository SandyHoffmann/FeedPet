import React from "react";
import { api } from "../../../service";
import { useState, useEffect } from "react";
import { VerificarErros } from "../../../errorHandling";

export function FormCadastro(){
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
            let erros = error.response.data
            VerificarErros(erros)
            console.log(error)
        }
    }

        return (
            <>
            <div className="container caixa">
                <form onSubmit={handleSubmit} className="caixaElemento" enctype="multipart/form-data"> 
                <h1>Cadastre-se</h1>
                <br/>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" id="nome" name="nome" aria-describedby="Nome" value={nome} onChange={handleChange} placeholder="Nome"/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" id="email" name="email" aria-describedby="Email" value={email} onChange={handleChange} placeholder="Email"/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="text" className="form-control" id="senha" name="senha" aria-describedby="Senha" value={senha} onChange={handleChange} placeholder="Senha"/>
                </div>
                <input type="file" name="avatar" class="img" onChange={handleChange}/>
                <br/>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>   
                <br/>
                </div>         
            </>
        );

}
