
import "./styles.css";
export function JanelaChatBot (props){
    function aparecerTexto(){
let h1 = document.querySelectorAll(".escondido")
let h5 = document.querySelectorAll(".Apagado")
h5[0].className="escondido"
h5[1].className="escondido"
h5[2].className="escondido"

h1[0].className="visivel"

    }
    return(
    <div className="chattotal">
        <input type="checkbox" id="check" />
            <label className="chat-btn" for="check"> 
        <i className="fa fa-commenting-o comment"></i> 
        <i className ="fa fa-close close"></i> 
        </label>
        <div className="wrapper">
            <div className="header">
                <h6>Você Precisa de Ajuda?</h6>
            </div>
            <div className="text-center p-2"> <span>Perguntas Mais Frequentes</span> </div>
            <div className="chat-form"> 
            <h5 onClick = {aparecerTexto} className= "Apagado">Como cadastrar seu animal?</h5> 
            <h5 onClick = {aparecerTexto} className= "Apagado">Como encontrar animal perdido?</h5>
            <h5 onClick = {aparecerTexto} className = "Apagado">Como cadastrar um animal perdido?</h5>
            <h1 className = "escondido">Teste</h1>
            </div>  
        </div>
    </div>
    )};
