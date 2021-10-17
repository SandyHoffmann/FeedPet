import "./stylesprincipal.css"
import { NoticiasCabecalho } from "./NoticiasCabecalho"
import { CardsNoticias } from "./cardsNoticias"
import { CardsLateral } from "./cardsLateral"
import { useEffect, useState } from "react"

export function PaginaNoticias() {
    const [currentCard, setCurrentCard] = useState(null);
    const [cards, setCards] = useState([
        {
            id: 1,
            titulo: "Vivo terá canal para clientes que quiserem adotar pets ",
            subtitulo: "Serviço estará disponível no aplicativo Meu Vivo inicialmente para clientes das capitais São Paulo, Rio de Janeiro, Belo Horizonte e regiões metropolitanas ",
            mensagem: "A Vivo decidiu usar sua plataforma de relacionamento, o aplicativo Meu Vivo, para criar um canal entre entidades de acolhimento animal e clientes interessados em adotar um pet. Quem mora nas cidades de São Paulo, Rio de Janeiro, Belo Horizonte e regiões metropolitanas poderá procurar um novo amigo acessando o Vivo Valoriza, no app Meu Vivo. Ao todo, mais de 20 ONGs já são parceiras da vivo nesse projeto.",
            imagem: "https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/cachorro_correndo_na_grama_verde_com_bola_de_tenis_na_boca.jpg?itok=pbqxzk7K"
        }
        , {
            id: 2, titulo: "Outubro Rosa Pet - Tumor de mama em cães e gatos.",
            subtitulo: "Saiba como identificar alterações nas mamas no seu pet e prevenir o avanço dos tumores de mama.",
            mensagem: "Os tumores de mama têm sido frequentemente diagnosticados em espécies caninas e felinas, sendo o tumor mais comum em cadelas e o terceiro mais comum em gatas. A maioria dessas neoplasias é maligna e pode estar associada à mortalidade, o que justifica a preocupação dos oncologistas veterinários quanto à rapidez no diagnóstico e estratégias terapêuticas para possibilitar eficácia no tratamento e proporcionar longevidade ao seu pet.",
            imagem: "https://www.specialdog.com.br/assets/uploads/images/xray.png"
        },
        {
            id: 3, titulo: "Motorista de táxi dog grava vídeos encantadores ao lado de seus passageiros caninos",
            subtitulo: "O desejo de muitas pessoas é se realizar profissionalmente e parece que o pai da Luisa Borges que reside no Rio de Janeiro conquistou esse sonho.",
            mensagem: "O homem encontrou no táxi dog a satisfação de trabalhar. Sim... ele conhece os mais simpáticos e fofos passageiros. E em janeiro de 2020 a sua filha compartilhou nas redes sociais alguns momentos graciosos dessas corridas. O motorista preza pela segurança e comodidade dos seus clientes e, para contentá-los, tem os melhores repertórios de músicas, e mais: canta com eles. E os mesmos parecem adorar. É muito fofo de ver!",
            imagem: "https://fotos.amomeupet.org/uploads/fotos/660x0_1633526046_615da11e39474_hd.webp"
        },

  {
            id: 4, titulo: "Brasil poderá ter marco regulatório dos animais de estimação",
            subtitulo: "Com base em dados oficiais do IBGE, o Brasil já é o segundo país na quantidade de animais de estimação",
            mensagem: "Está em análise na Comissão de Meio Ambiente (CMA) projeto que cria no Brasil o marco regulatório dos animais de estimação (PL 6.590/2019). O autor, senador Luis Carlos Heinze (PP-RS), explica que seu objetivo é, além de reconhecer a importância que esses animais têm para o ser humano, conferir segurança jurídica aos segmentos econômicos envolvidos no setor.Com base em dados oficiais do Instituto Brasileiro de Geografia e Estatística (IBGE), Heinze aponta que o Brasil já é o segundo país na quantidade de animais de estimação. Os números de 2018 indicam a presença de 139,3 milhões desses animais. São 54,2 milhões de cães, 39,8 milhões de aves, 23,9 milhões de gatos, 19,1 milhões de peixes e 2,3 milhões de outras espécies (répteis, anfíbios e pequenos mamíferos). O Brasil já tem mais cães e gatos do que crianças em seus lares, segundo o IBGE",
            imagem: "https://exame.com/wp-content/uploads/2020/01/gettyimages-1168451046.jpg?quality=70&strip=info&resize=680,453"
        },
    
        {
            id: 5, titulo: "Quase 48 milhões de domicílios no Brasil tem cães ou gatos, aponta pesquisa do IBGE",
            subtitulo: "Os dados revelados pelo IBGE mostram que a vacinação dos animais teve uma queda",
            mensagem: "Os animais de estimação fazem parte de uma quantidade considerável de lares brasileiros. De acordo com dados da Pesquisa Nacional de Saúde (PNS) de 2019 divulgada pelo Instituto Brasileiro de Geografia e Estatística nesta sexta-feira (4/9) revelou que em 46,1% dos domicílios tinham pelo menos um cachorro. Já os gatos eram parte de 19,3% dos lares brasileiros. Ao todo cães e gatos estão presentes em 47,9 milhões de domicílios. Deste total, 33,8 milhões de unidades possuem cães. Pelas regiões, a que apresentou maior proporção, com 57,4%. Já o Nordeste apresentou a menor, 37,6%. Outras 14,1 milhões de residências contam com pelo menos um gato. Neste caso, o Norte e Nordeste são os com maiores percentuais, 25,3% e 24,1%, respectivamente. Os menores índices são no Sudeste e Centro-Oeste, com 15,2% e 16,6%, respectivamente.",
            imagem: "https://midias.correiobraziliense.com.br/_midias/jpg/2020/09/04/820x547/1_cbnfot210520191028-6267788.jpg"
        },
        {
            id: 6, titulo: "Brasil torna-se o segundo maior mercado de produtos pet",
            subtitulo: "Em meados de março, as ruas estavam esvaziadas na cidade de São Paulo com o início das medidas de prevenção ao contágio pelo coronavírus. Mas era possível ver alguns estacionamentos lotados. Eram dos grandes atacados e das redes especializadas em produtos para animais de estimação.",
            mensagem: "Em meados de março, as ruas estavam esvaziadas na cidade de São Paulo com o início das medidas de prevenção ao contágio pelo coronavírus. Mas era possível ver alguns estacionamentos lotados. Eram dos grandes atacados e das redes especializadas em produtos para animais de estimação. A preocupação em estocar alimentos – mesmo sem orientação oficial para tal atitude – em igual proporção para humanos e animais domésticos revela por que o segmento cresce de forma tão sustentada. De acordo com levantamento da Euromonitor International, o Brasil se tornou o segundo maior mercado de produtos pet, com 6,4% de participação global, pela primeira vez acima do Reino Unido (6,1%). Perde apenas para os Estados Unidos, que têm assombrosos 50% do mercado.",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOorcekfhiOfbWsm_5AWcypRMdQlt2C4Lzw&usqp=CAU"
        },
    ]);

    const [cardsNoticias, setCardsNoticias] = useState([]);


    useEffect(() => {
        console.log(currentCard)
        const cardsFormatados = cards.slice();
        cardsFormatados.splice(0, 0, cardsFormatados.splice(currentCard, 1)[0]);
        setCardsNoticias(cardsFormatados);
    }, [currentCard]);


    return (
        <div>

            <div className="cabecalho">
                <NoticiasCabecalho

                />
            </div>
            <div className="Cards">
                <div className="Lateral">
                    {
                        cards.map((card, index) => (
                            index < 3 &&
                            <CardsLateral
                                key={card.id}
                                titulo={card.titulo}
                                subtitulo={card.subtitulo}
                                imagem={card.imagem}
                                onClick={() => setCurrentCard(index)}
                            />

                        ))
                    }
                </div>
                <div className="div">
                    {
                        cardsNoticias.map(card => <CardsNoticias key={card.id} titulo={card.titulo} mensagem={card.mensagem} imagem={card.imagem} />)
                    }
                </div>
                <div className="Lateral">
                    {
                        cards.map((card, index) => (
                            index >= 3 &&
                            <CardsLateral
                                key={card.id}
                                titulo={card.titulo}
                                subtitulo={card.subtitulo}
                                imagem={card.imagem}
                                onClick={() => setCurrentCard(index)}
                            />

                        ))
                    }
                </div>

            </div>




        </div>

    )
}