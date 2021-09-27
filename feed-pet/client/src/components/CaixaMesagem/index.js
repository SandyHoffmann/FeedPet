import { Cabecalho } from "./Cabecalho";
import { CaixaDeTextoLateralDireita } from "./CaixaDeTexoLateralDireita";
import { NavBarLateral } from "./NavBarLateral";
import "./styles.css";
import { BiSearchAlt2 } from 'react-icons/bi';



export function CaixaMensagem() {
    return (
        <div className="container-caixa-mensagem">
            <Cabecalho />
            <div className="cards">
           <div className =" CaixaLupa">
            <i aria-hidden="true" className ="Lupa" ><BiSearchAlt2/></i><input type="text" value="Digite Nome do Usuario" className="inputUsuario" /> 
            </div>
                <NavBarLateral />
                <NavBarLateral />
                <NavBarLateral />
                
            </div>
            <div className="conteudo">
                <CaixaDeTextoLateralDireita />
            </div>
        </div>
    );
}