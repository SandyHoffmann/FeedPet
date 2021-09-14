import './styles.css';
import React, {Component} from 'react';
import { MdThumbDown,MdThumbUp } from 'react-icons/md';

 function LikeDeslike() {
   return (
     <>
     
     <button type="submit" className ="botaoUp">
       
       <MdThumbUp
        size={30}
         color="#"
       />
     </button>
     10
     <button type="submit" className = "botaoDown">
     
       <MdThumbDown
         size={30}
         color="#"
       />
     </button>
     10
     </>
    
   );}
   export {LikeDeslike};