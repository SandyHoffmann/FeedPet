import { FotoComentario } from "./FotoComentario";
import { NomeData } from "./NomeData";

import { TextoComentario } from "./TextoComentario";
import "./stylesConteiner.css";

export function Conteiner(){
    return(
        <div className = "conteiner">
            <FotoComentario />
            <NomeData />
            <TextoComentario />
        </div>        
    )
}