import React from "react";
import "./style.css"
export function Pesquisa(props) {
    // constructor(props){
    //     super(props);
    // }
   
        return(
            <div>
            <input type="text" value={props.texto} className="Pesquisa" onChange={props.onChange} name="filterText"></input>
            <div>
            {/* <input type="checkbox" name="checkbox" checked={props.valor} name="isStockOnly" onClick={props.onClick}></input>
            <label for="checkbox">Only show products in stock</label> */}
            </div>
            </div>
        );
}