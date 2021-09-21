import { FotoComentario } from "./fotoComentario";
import { NomeData } from "./nomeData";
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