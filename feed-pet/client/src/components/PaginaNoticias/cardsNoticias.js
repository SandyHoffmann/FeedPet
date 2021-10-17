import "./stylesCards.css";
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { GrTextAlignCenter } from "react-icons/gr";
export function CardsNoticias({ titulo, mensagem, imagem }) {
    return (

        <div className="conteinerCardsNoticias">

            <MDBCard className="cardPosition">
                <MDBCardImage src={imagem} position='top' alt='...' />
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