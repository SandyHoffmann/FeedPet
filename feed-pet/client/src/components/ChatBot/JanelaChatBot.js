import "./styles.css";
import { useState } from "react";
import { GrCaretPrevious} from 'react-icons/gr';
import {GrHelp} from 'react-icons/gr'
export function JanelaChatBot(props) {
    const [perguntaSelecionada, setPerguntaSelecionada] = useState(null);
    const perguntasRespostas = [
        { pergunta: "Como cadastrar seu animal?", resposta: "Vá ate o menu de meus animais, lá tem a opção para o cadastro!" },
        { pergunta: "Como cadastrar um animal perdido?", resposta: "Clique no botao de alerta no menu, escolha um animal para cadastrar, e ponha isso no mapa, seu animal aparecera como perdido!" },
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
