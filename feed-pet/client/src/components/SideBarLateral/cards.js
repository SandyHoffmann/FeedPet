
import "./stylescards.css";
import { MdThumbDown,MdThumbUp } from 'react-icons/md';
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { max } from 'moment';

export  function Cards() {
  return (
    <MDBCard className= "CardPrincipal">
      <MDBCardImage className ="imagemCard"   src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle className = "titulo">Comentários</MDBCardTitle>
        <MDBCardText className= "Texto">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <div className = "iconeLike">
          <MdThumbUp
        size={15}
         color="white"
         /> 
         <div className = "numeroLike">1</div>
         </div>
       
      </MDBCardBody>
    </MDBCard>
  );
}