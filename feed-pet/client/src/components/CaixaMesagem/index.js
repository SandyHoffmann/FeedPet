import { Cabecalho } from "./Cabecalho";
import { CaixaDeTextoLateralDireita } from "./CaixaDeTexoLateralDireita";
import { NavBarLateral } from "./NavBarLateral";
import "./styles.css";
import { BiSearchAlt2 } from 'react-icons/bi';
import { useEffect, useState } from "react";



export function CaixaMensagem() {
    const [layoutResponsivo, setLayoutResponsivo] = useState(false);

    useEffect(() => {
        function resizeWindow() {
            console.log("executou")
            const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

            if (width < 680) {
                setLayoutResponsivo(true)
            } else {
                setLayoutResponsivo(false);
            }                      
        }

        window.addEventListener("resize", resizeWindow);
        resizeWindow();

        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    if (layoutResponsivo) {
        return <p>Oi</p>
    }

    return (
        <div className ="ConteinerMaior">
        <div className="container-caixa-mensagem">
            
            
            <div className="cards">
           <div className =" CaixaLupa">
            <i aria-hidden="true" className ="Lupa" ><BiSearchAlt2/></i><input type="text" value="Digite Nome do Usuario" className="inputUsuario" /> 
           
            </div>

            <div className = "ScrollCard">
                <NavBarLateral />
                <NavBarLateral />
                <NavBarLateral />
                <NavBarLateral />
                <NavBarLateral />
                <NavBarLateral /> 
                <NavBarLateral />
                <NavBarLateral />
            </div> 
            </div>
            <div className="conteudo">
                <Cabecalho />
                <CaixaDeTextoLateralDireita />
            </div>
        </div>
        </div>
    );
}