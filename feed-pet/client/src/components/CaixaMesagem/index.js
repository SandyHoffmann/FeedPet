import { Cabecalho } from "./Cabecalho";
import { CaixaDeTextoLateralDireita } from "./CaixaDeTexoLateralDireita";
import { NavBarLateral } from "./NavBarLateral";
import "./styles.css";


export function CaixaMensagem() {
    return (
        <div className="container-caixa-mensagem">
            <Cabecalho />
            <div className="cards">
            <input type="text"  src="lupa" value="Digite Nome do Usuario" className="inputUsuario" ></input>
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