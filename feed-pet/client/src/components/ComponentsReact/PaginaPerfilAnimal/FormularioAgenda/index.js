import { api } from "../../../../service";
import { useState, useEffect } from "react";
import Select from 'react-select';

const jwt = require('jsonwebtoken');
const opcoes = [{"value":"Dei Ração","atividade_feita":"Dei Ração",'label':"Dei Ração"},
                {"value":"Dei Remédio","atividade_feita":"Dei Remédio",'label':"Dei Remédio"},
                {"value":"Coloquei Água","atividade_feita":"Coloquei Água",'label':"Coloquei Água"},
                {"value":"Levei para Passear","atividade_feita":"Levei para Passear",'label':"Levei para Passear"},
                {"value":"Outro","atividade_feita":"Outro",'label':"Outro"}]

export function FormularioAgenda(props) {
    const [atividadeFeita, setAtividadeFeita] = useState("")

    async function handleChange(e) {
        // const value = e.target.value;
        // const nome = e.target.name;
        setAtividadeFeita(e);
        // console.log(value)
    }
    
    async function handleSubmit(e) {
            e.preventDefault();
            let atividades = ""
            for (let atividade of atividadeFeita){
                atividades+=atividade.atividade_feita+" "
            }
            try {
                const res = await api.post(`/agendas/${props.atividade_feita}`,
                {   
                    "atividade_feita": atividades,
                    "data_atividade":'2004-10-19 10:23:54+02'
                });
                const atividade_feita = res.data;
                props.setarAtividade(atividade_feita)
                setAtividadeFeita("")
    
            } catch (error) {
                console.log(error)
            }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nome">Nova Atividade:</label>
                {/* <input type="text" className="form-control" id="atividade_feita" name="atividade_feita" aria-describedby="Nome" value={atividadeFeita} onChange={handleChange} placeholder="Atividade Feita"/> */}
                <Select
                        isMulti
                        name="colors"
                        options={opcoes.map(opcao => opcao)}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleChange}
                />
            </div>
            <br/>
            <button type="submit" className="btn botaoRosa">Enviar</button>
            </form>            
        </>
    )

}