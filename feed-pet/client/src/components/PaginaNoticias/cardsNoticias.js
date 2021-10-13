import "./stylesCards.css";
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { GrTextAlignCenter } from "react-icons/gr";
export function CardsNoticias({ titulo, mensagem }) {
    return (

        <div className="conteinerCardsNoticias">

            <MDBCard className="cardPoistion">
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>{ titulo }</MDBCardTitle>
                    <MDBCardText className="tamanhoTexto" >
                        {mensagem}
                    </MDBCardText>
                    
                </MDBCardBody>
            </MDBCard>
        </div>


    )
}