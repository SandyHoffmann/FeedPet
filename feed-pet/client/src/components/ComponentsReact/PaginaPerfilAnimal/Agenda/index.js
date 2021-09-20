import { useState, useEffect } from "react";
import { api } from "../../../../service";
import { useParams } from "react-router-dom";
import { FormularioAgenda } from "../FormularioAgenda";
import imgpost from "../../../../assets/icone1.png";
import "./styles.css"
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
            console.log("ativou")
        } catch (error) {
            console.log(error)
        }
    }, [])
    function setInformacoesAtiv(informacao) {
        setInformacoes([
            informacao,
            ...informacoes
        ])

    }
    return (
        <>
            <li><div className="novaAtividade"><FormularioAgenda atividade_feita={agenda.id} setarAtividade={setInformacoesAtiv} atividades={informacoes} /></div></li>
            {informacoes.map(tarefa =>
                <li key={tarefa.id}>
                    <div className="timeline-time">
                        <span className="date">today</span>
                        <span className="time">07:20</span>
                    </div>

                    <div className="timeline-icon">
                        <a href="javascript:;">&nbsp;</a>
                    </div>

                    <div className="timeline-body">
                        <div className="timeline-header">
                            <span className="userimage">
                                <img src={imgpost} alt=""></img>
                            </span>
                            <span className="username">Sabrina</span>
                        </div>
                        <div className="timeline-content">
                            <p>
                                {tarefa.atividade_feita}
                            </p>
                        </div>
                        <div className="timeline-likes">

                            <div className="stats">
                                <span className="fa-stack fa-fw stats-icon">
                                    <i className="fa fa-circle fa-stack-2x text-danger"></i>
                                    <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                                </span>
                                <span className="fa-stack fa-fw stats-icon">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                                </span>
                            </div>
                        </div>
                        <div className="timeline-footer">
                        </div>
                    </div>
                </li>)}

        </>

    )
}