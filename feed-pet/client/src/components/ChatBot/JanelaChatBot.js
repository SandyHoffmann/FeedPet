import "./styles.css";
import { useState } from "react";
import { GrCaretPrevious} from 'react-icons/gr';
import {GrHelp} from 'react-icons/gr'
export function JanelaChatBot(props) {
    const [perguntaSelecionada, setPerguntaSelecionada] = useState(null);
    const perguntasRespostas = [
        { pergunta: "Como cadastrar seu animal?", resposta: "resposta1" },
        { pergunta: "Como cadastrar um animal perdido?", resposta: "resposta 2" },
        { pergunta: "Como localizar um usuário", resposta: "resposta 3" }
    ];

    const respostas = [
        ""
    ]

    return (
        <div className="chattotal">
            <input type="checkbox" id="check" />
            <label className="chat-btn" for="check">
                <i className="fa fa-commenting-o comment"></i>
                <i aria-hidden="true" className="iconeAjuda">
          <GrHelp  /></i>
            </label>
            <div className="wrapperChat">
                <div className="header">
                    <h6>Você Precisa de Ajuda?</h6>
                </div>

                <div className="text-center p-2"> <span>Perguntas Mais Frequentes</span> </div>
                <div className="chat-form">
                
                   
                    { 
                        perguntaSelecionada ?
                       <> <i aria-hidden="true" className="iconeVoltar" onClick={() => setPerguntaSelecionada(null)}>
          <GrCaretPrevious />Voltar</i>
          
                            <h5>{perguntaSelecionada.resposta}</h5></> :
                            perguntasRespostas.map(perguntaResposta => <h5 onClick={() => setPerguntaSelecionada(perguntaResposta)}>{perguntaResposta.pergunta}</h5>)
                    }                    
                </div>
            </div>
        </div>
    )
};
