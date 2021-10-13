import "./stylesCards.css";
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { GrTextAlignCenter } from "react-icons/gr";
export function CardsNoticias() {
    return (

        <div className="conteinerCardsNoticias">

            <MDBCard className="cardPoistion">
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Título da Notícia</MDBCardTitle>
                    <MDBCardText className="tamanhoTexto" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ornare est.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Sed et nisi posuere, faucibus turpis et, vehicula nisl. Nunc iaculis nisi eu enim lacinia accumsan.
                        In tempus sagittis volutpat. Vestibulum aliquam euismod tempus. Aliquam luctus nisi a mi mollis, sit amet convallis arcu finibus.
                        Aliquam mollis nunc quis urna hendrerit, eu laoreet lectus iaculis. Etiam euismod ante fermentum metus volutpat pharetra.

                        Maecenas id magna magna. Nulla nunc nisi, maximus id aliquam sit amet, convallis eu mauris. Maecenas dolor lorem, suscipit gravida est in, congue rutrum nisl.
                        Morbi varius purus eu felis tincidunt, et sollicitudin ex scelerisque. Aliquam luctus, libero vel interdum commodo, neque elit maximus nibh, quis suscipit purus erat ac libero. Phasellus scelerisque mauris blandit enim scelerisque aliquam. Integer et libero vel purus volutpat pretium a eget turpis.
                        Etiam laoreet nibh et sagittis semper. Donec fringilla tellus et tortor lobortis, vitae feugiat erat lacinia. Etiam pharetra, orci at lacinia
                        efficitur, turpis risus suscipit sem, ac consequat neque mauris in elit. Nunc rhoncus fermentum arcu, nec rhoncus tortor.
        </MDBCardText>
                    
                </MDBCardBody>
            </MDBCard>
        </div>


    )
}