import "./stylesCabecalho.css"
import { FaUserCircle } from "react-icons/fa";

export function Cabecalho (props){
    return(
    
    <div className = "texto">
     <div className = "NomePessoa"> 
    <p>
    Nome da Pessoa
    
    </p>
    </div>
    <div className ="icone">
    <FaUserCircle size={60}  color="white" />
    </div>
    </div>  ) 
}
