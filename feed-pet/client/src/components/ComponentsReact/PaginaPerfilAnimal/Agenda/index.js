import { useState, useEffect } from "react";
import { api } from "../../../../service";
import {useParams} from "react-router-dom";
import { FormularioAgenda } from "../FormularioAgenda";

export function AgendaAnimal(props) {
    const [informacoes, setInformacoes] = useState([])
    const [agenda, setAgenda] = useState([])

    const { id } = useParams();
    console.log(id)

    
    useEffect(async () => {
        try {
            const agenda = await api.get(`/agendas/${id}`);
            const informacaoAgenda = agenda.data;
            const res = await api.get(`/agendas/atividades/${informacaoAgenda.id}`);
            const informacao = res.data;
            setAgenda(informacaoAgenda)
            setInformacoes(informacao.reverse())
            console.log(informacao)
        } catch (error) {
            console.log(error)
        }
    }, [])
    function setInformacoesAtiv (informacao) {
        setInformacoes([
            informacao,
            ...informacoes                
        ])

    }
    return (
        <>
        <FormularioAgenda atividade_feita={agenda.id} setarAtividade={setInformacoesAtiv} atividades={informacoes}/>
        { informacoes.map(tarefa => <h1 key={tarefa.id}>{tarefa.atividade_feita}</h1>)} 
        <li>
            <div className="timeline-time">
                <span className="date">yesterday</span>
                <span className="time">20:17</span>
            </div>

            <div className="timeline-icon">
                <a href="javascript:;">&nbsp;</a>
            </div>
            <div className="timeline-body">
                <div className="timeline-header">
                    <span className="userimage">
                        <img
                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                            alt=""
                        ></img>
                    </span>
                    <span className="username">Lorena</span>
                </div>
                <div className="timeline-content">
                    <p>Localização: Blumenau</p>
                </div>
                <div className="timeline-footer">
                </div>
            </div>
        </li>
        </>

    )
}