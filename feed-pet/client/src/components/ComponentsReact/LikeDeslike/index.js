import './styles.css';
import React, {Component} from 'react';
import { MdThumbDown,MdThumbUp } from 'react-icons/md';

 export function LikeDeslike(props) {
   return (
     <>
     
     <button type="submit" className ={"botaoUp "+props.ativo} onClick={props.onClickBotao}>
       
       <MdThumbUp
        size={30}
         color="#"
       />
     </button>
     </>
    
   );}
