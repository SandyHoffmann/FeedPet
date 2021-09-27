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
           
            <input type="text" value="Digite Nome do Usuario" className="inputUsuario" > <i aria-hidden="true" ><BiSearchAlt2/></i></input>
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