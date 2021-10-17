
import "./stylesCardsLateral.css";
import { MdThumbDown,MdThumbUp } from 'react-icons/md';
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { max } from 'moment';

export  function CardsLateral({ titulo, subtitulo, imagem, onClick }) {
  return (
    <MDBCard className= "cardLateral" onClick={onClick}>
      <MDBCardImage className ="imagemCard"   src={imagem} position='top'  />
      <MDBCardBody>
        <MDBCardTitle className = "titulo">{titulo}</MDBCardTitle>
        <MDBCardText className= "Texto">
          {subtitulo}
        </MDBCardText>
        
       
      </MDBCardBody>
    </MDBCard>
  );
}