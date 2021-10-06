import React from "react";
import "./style.css"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logo from "./logo.png";


export function PesquisaEstilo(props) {

    return (


        <div className="barra-pesquisa">

            <div class="stars" ></div>
            <div class="stars2" ></div>
            <div className="caixaPesquisa">
                <input type="text" value={props.texto} className="Pesquisa" onChange={props.onChange} name="filterText"></input>
            </div>
            <div className="barra-pesquisa__opcoes">
                <div className="filtros">
                    <div className="elemento radiooptions">
                        <div className="conjunto">
                            <div className="form-check sim" id="form">
                                <input className="form-check-input siminput" type="radio" name="status" id="radiotipo1" value="Tem dono" onClick={props.onClick} />
                                <label className="form-check-label" htmlFor="radiotipo1" className="dono">
                                    Sim
                                </label>
                            </div>
                            <p>Tem Dono</p>
                        </div>
                        <div className="conjunto">
                            <div className="form-check nao" id="form">
                                <input className="form-check-input naoinput" type="radio" name="status" id="radiotipo2" value="Não possui dono" onClick={props.onClick} />
                                <label className="form-check-label" htmlFor="radiotipo2">
                                    Não
                                </label>
                            </div>
                            <p>Não Tem Dono</p>
                        </div>
                    </div>
                    <div className="elemento radiooptions">
                        <div className="conjunto">
                            <div className="form-check cachorro" id="form">
                                <input className="form-check-input doginput" type="radio" name="tipo_animal" id="exampleRadios1" value="Cachorro" onClick={props.onClick} />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Cachorro
                                </label>
                            </div>
                            <p>Cachorro</p>
                        </div>
                        <div className="conjunto">
                            <div className="form-check gato">
                                <input className="form-check-input catinput" type="radio" name="tipo_animal" id="exampleRadios2" value="Gato" onClick={props.onClick} />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Gato
                                </label>
                            </div>
                            <p>Gato</p>
                        </div>
                    </div>
                </div>
                <div className="filtros_footer">

                    <div className="elemento select">
                        <div className="form-group form-personalizado" className={`select ${(props.tipo_animal == "Cachorro" || "hidden")}`}>
                            <label htmlFor="raca">Selecione a Raça
                            <select className="form-control form-personalizado" id="raca" name="raca" onChange={props.onChangeOption}>
                                <option>Pit Bull</option>
                                <option>Pastor Alemão</option>
                                <option>Pincher</option>
                                <option>Pitbull</option>
                                <option>Vira Lata</option>
                            </select>
                            </label>
                        </div>
                        <div className="form-group form-personalizado" className={`select ${(props.tipo_animal == "Gato" || "hidden")}`}>
                            <label htmlFor="raca">Selecione a Raça</label>
                            <select className="form-control form-personalizado" id="raca" name="raca" onChange={props.onChangeOption}>
                                <option>Angora</option>
                                <option>Siames</option>
                                <option>Gato Rebaixado</option>
                                <option>Rajado</option>
                                <option>Vira Lata</option>
                            </select>
                        </div>
                    </div>
                    <div className="elemento select cor">
                        <div className="form-group form-personalizado">
                            <label htmlFor="raca">Selecione a Cor</label>
                            <select className="form-control selectRaca form-personalizado" id="cor" name="cor" onChange={props.onChangeOption}>
                                <option>Branco</option>
                                <option>Preto</option>
                                <option>Alaranjado</option>
                                <option>Tricolor</option>
                                <option>Caramelo</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

{/* <div style={{
    marginLeft: '700px',
    marginRight: '250px',
    marginTop: '40px'
}}>
    <h3></h3>
    <Autocomplete
        style={{
            width: 700,
            backgroundColor: 'white',
            paddingTop: '3px'
        }}
        value={props.texto}
        freeSolo
        autoComplete
        autoHighlight
        options={props.options}
        renderInput={(params) => (
            <TextField {...params}
                label="Search Box"
                className="Pesquisa"
                onChange={props.onChange}
                name="filterText"
            />
        )}
    />
</div> */}