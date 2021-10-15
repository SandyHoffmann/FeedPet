import { useState, useEffect } from "react";
import { api } from "../../../../service";
import { useParams } from "react-router-dom";
import { FormularioAgenda } from "../FormularioAgenda";
import "./styles.css"
import { Link } from "react-router-dom";

const moment = require('moment'); 

const jwt = require('jsonwebtoken');

export function AgendaAnimal(props) {
    const [informacoes, setInformacoes] = useState([])
    const [agenda, setAgenda] = useState([])
    const [usuario, setUsuario] = useState([])

    const { id } = useParams();
    console.log(id)

    moment.locale('pt-br');

    useEffect(async () => {
        try {
            
            const agenda = await api.get(`/agendas/${id}`);
            const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
            const usuarioLogado = await api.get(`/usuarios/${token.sub}`);  
            setUsuario(usuarioLogado.data)      
            setAgenda(agenda.data[0])
            setInformacoes(agenda.data[1].reverse())
        } catch (error) {
            console.log(error)
        }
    }, [])
    function setInformacoesAtiv(informacao) {
        informacao["usuario"]=usuario
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
                        <span className="date">{moment(tarefa.createdAt).format('DD-MM')}</span>
                        <span className="time">{moment(tarefa.createdAt).format('HH:mm')}</span>
                    </div>

                    <div className="timeline-icon">
                        <a href="javascript:;">&nbsp;</a>
                    </div>

                    <div className="timeline-body">
                        <div className="timeline-header">
                            <span className="userimage">
                                <img src={tarefa.usuario.avatar} alt=""></img>
                            </span>
                            <Link to={`/perfil-usuario/${tarefa.usuario.id}`}><span className="username">{tarefa.usuario.nome}</span></Link>
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