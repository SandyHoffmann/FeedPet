import "./stylesprincipal.css"
import { NoticiasCabecalho } from "./NoticiasCabecalho"
import { CardsNoticias } from "./cardsNoticias"
import {CardsLateral} from "./cardsLateral"

export function PaginaNoticias() {
    return (
        <div>

            <div className="cabecalho">
                <NoticiasCabecalho /></div>
            <div className="Cards">
            <div className="Lateral">
                < CardsLateral />
                </div>
                <div className = "div">
                <CardsNoticias />
                <CardsNoticias />
                <CardsNoticias />
                </div>
                <div className="Lateral">
                < CardsLateral /></div>

            </div>
           



        </div>

    )
}