import React from "react";
import "./style.css"
export function Pesquisa(props) {
  
        return(
            <div>
            <input type="text" value={props.texto} className="Pesquisa" onChange={props.onChange} name="filterText"></input>
            <div>
         
            <label htmlFor="form">Tem dono?</label>
                <div className="form-check" id="form">
                    <input className="form-check-input" type="radio" name="status" id="radiotipo1" value="Tem dono" onClick={props.onClick}/>
                    <label className="form-check-label" htmlFor="radiotipo1">
                        Sim
                    </label>
                </div>
                <div className="form-check" id="form">

                    <input className="form-check-input" type="radio" name="status" id="radiotipo2" value="Não possui dono" onClick={props.onClick}/>
                    <label className="form-check-label" htmlFor="radiotipo2">
                        Não
                    </label>
                </div>
                <label htmlFor="form">Tipo de Animal</label>
                <div className="form-check" id="form">
                    <input className="form-check-input" type="radio" name="tipo_animal" id="exampleRadios1" value="Cachorro" onClick={props.onClick}/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Cachorro
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="tipo_animal" id="exampleRadios2" value="Gato" onClick={props.onClick}/>
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Gato
                    </label>
                </div>
                
                <div className="form-group" className={props.tipo_animal == "Cachorro" || "hidden"}>
                    <label htmlFor="raca">Selecione a Raça</label>
                    <select className="form-control" id="raca" name="raca" onChange={props.onChangeOption}>
                        <option>Pit Bull</option>
                        <option>Pastor Alemão</option>
                        <option>Pincher</option>
                        <option>Pitbull</option>
                        <option>Vira Lata</option>
                    </select>
                </div>          
                <div className="form-group" className={props.tipo_animal =="Gato" || "hidden"}>
                    <label htmlFor="raca">Selecione a Raça</label>
                    <select className="form-control" id="raca" name="raca" onChange={props.onChangeOption}>
                        <option>Angora</option>
                        <option>Siames</option>
                        <option>Gato Rebaixado</option>
                        <option>Rajado</option>
                        <option>Vira Lata</option>
                    </select>
                </div>          
                <div className="form-group">
                    <label htmlFor="raca">Selecione a Cor</label>
                    <select className="form-control" id="cor" name="cor" onChange={props.onChangeOption}>
                        <option>Branco</option>
                        <option>Preto</option>
                        <option>Alaranjado</option>
                        <option>Tricolor</option>
                        <option>Caramelo</option>
                    </select>
                </div>   
            </div>
            </div>
        );
}