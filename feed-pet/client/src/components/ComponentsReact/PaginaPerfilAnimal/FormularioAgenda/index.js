import { api } from "../../../../service";
import { useState, useEffect } from "react";


export function FormularioAgenda(props) {
    const [atividadeFeita, setAtividadeFeita] = useState("")

    async function handleChange(e) {
        const value = e.target.value;
        const nome = e.target.name;
        setAtividadeFeita(value);
        console.log(value)
    }
    
    async function handleSubmit(e) {
            e.preventDefault();

            try {
                const res = await api.post(`/agendas/${props.atividade_feita}`,
                {
                    "atividade_feita": atividadeFeita,
                    "data_atividade":'2004-10-19 10:23:54+02'
                });
                const atividade_feita = res.data;
                let lista = props.atividades.push([atividade_feita])
                console.log(props.atividades)
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
                <input type="text" className="form-control" id="atividade_feita" name="atividade_feita" aria-describedby="Nome" value={atividadeFeita} onChange={handleChange} placeholder="Atividade Feita"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            </form>            
        </>
    )

}