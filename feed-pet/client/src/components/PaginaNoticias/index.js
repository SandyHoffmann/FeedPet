import "./stylesprincipal.css"
import { NoticiasCabecalho } from "./NoticiasCabecalho"
import { CardsNoticias } from "./cardsNoticias"
import { CardsLateral } from "./cardsLateral"
import { useEffect, useState } from "react"

export function PaginaNoticias() {
    const [currentCard, setCurrentCard] = useState(null);
    const [cards, setCards] = useState([
        { id: 1, titulo: "card 01", subtitulo: "subtitulo card 01", mensagem: "Mensagem card 01" },
        { id: 2, titulo: "card 02", subtitulo: "subtitulo card 02", mensagem: "Mensagem card 02" }
    ]);

    // const [noticiasCards, setNot]

    useEffect(() => {
        const cardsFormatados = cards.slice();
        cardsFormatados.splice(0, 0, cardsFormatados.splice(currentCard, 1)[0]);

        setCards(cardsFormatados);
    }, [currentCard]);


    return (
        <div>

            <div className="cabecalho">
                <NoticiasCabecalho /></div>
            <div className="Cards">
                <div className="Lateral">
                    {
                        cards.map((card, index) => (
                            <CardsLateral 
                                key={card.id} 
                                titulo={card.titulo} 
                                subtitulo={card.subtitulo} 
                                onClick={() => setCurrentCard(index)}
                            />
                                
                        ))
                    }
                </div>
                <div className="div">
                    {                                                                    
                        cards.map(card => <CardsNoticias key={card.id} titulo={card.titulo} mensagem={card.mensagem} />)                        
                    }                    
                </div>
                <div className="Lateral">
                    < CardsLateral />
                    < CardsLateral />
                    < CardsLateral />
                </div>

            </div>




        </div>

    )
}