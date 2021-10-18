import React from "react";
import { api } from "../../../../service";
import "./styles.css"
import { id, secret } from '../../../../varAmbiente'

const jwt = require('jsonwebtoken');

const initialState = {
    nome: "",
    raca: "",
    porte: "Médio",
    cor: "Branco",
    tipo_animal: "",
    status: "",
    sexo: "",
    avatar: "",
    idade: "",
    publico: true
}

export class FormAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            raca: "",
            porte: "Médio",
            cor: "Branco",
            tipo_animal: "",
            status: "",
            sexo: "",
            avatar: "",
            publico: true,
            idade: ""
        };
    }


    handleChange = e => {
        const value = e.target.value;
        const nome = e.target.name;
        this.setState({
            [nome]: value
        });
        if (nome == "tipo_animal") {
            if (value == "Cachorro") {
                this.setState({
                    raca: "Pit Bull"
                })
            } else {
                this.setState({
                    raca: "Angora"
                })
            }
        }
    }

    handleSubmit = async e => {
        try {
            e.preventDefault();
            const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
            let formData = new FormData(e.target);
            console.log(formData)

            // let animalFormado = {nome:this.state.nome,
            //                     raca:this.state.raca,
            //                     porte:this.state.porte,
            //                     cor:this.state.cor,
            //                     tipo_animal:this.state.tipo_animal,
            //                     status:this.state.status,
            //                     sexo:this.state.sexo,
            //                     publico:this.state.publico,
            //                     avatar:formData}
            const animal = await api.post(`/usuarios/animais/${token.sub}`,
                formData, {
                headers: {
                    "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
                }
            });
            console.log(animal.data)

            if (this.props.alertaAnimal) {
                this.props.cardAlerta([animal.data, ...this.props.animaisAlerta])
                let div = document.querySelectorAll(".voltaranimalalerta")
                let divVisivel = document.querySelectorAll(".modalalertaanimalform")
                div[0].className = "voltaranimalalerta invisivelAlerta"
                divVisivel[0].className = "modalalertaanimalform visivelAlerta"
            } else {
                this.props.fecharForm()
                this.props.setarCard(animal.data)
            }
            this.setState({ ...initialState })

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const card = this.state.card;
        console.log(card)

        return (
            <>
                <form onSubmit={this.handleSubmit} className="formanimal">
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" className="form-cadastro" id="nome" name="nome" aria-describedby="Nome" value={this.state.nome} onChange={this.handleChange} placeholder="Nome do Animal" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idade">Idade:</label>
                        <input type="text" className="form-control" id="idade" name="idade" aria-describedby="Idade" value={this.state.idade} onChange={this.handleChange} placeholder="Idade do Animal" />
                    </div>
                    <div className="radiooptionsAnimalForm formAnimalOptions">
                        <div className="conjuntoAnimal">
                            <label htmlFor="form">Tem dono?</label>
                            <div class="colunaAnimalForm">
                                <div>
                                    <div className="form-check sim" id="form">
                                        <input className="form-check-input siminput" type="radio" name="status" id="radiosim" value="Tem dono" onChange={this.handleChange} />
                                        <label className="form-check-label" htmlFor="radiosim" className="dono">
                                            Sim
                                        </label>
                                    </div>
                                    <p>Dono</p>
                                </div>
                                <div>
                                    <div className="form-check nao" id="form">

                                        <input className="form-check-input" type="radio" name="status" id="radionao" value="Não possui dono" onChange={this.handleChange} />
                                        <label className="form-check-label" htmlFor="radionao">
                                            Não
                                        </label>
                                    </div>
                                    <p>Sem Dono</p>
                                </div>
                            </div>
                        </div>
                        <div className="conjuntoAnimal">
                            <label htmlFor="sexo">Sexo</label>
                            <div className="colunaAnimalForm">
                                <div>
                                    <div className="form-check macho" id="form">
                                        <input className="form-check-input" type="radio" name="sexo" id="radiosexomacho" value="macho" onChange={this.handleChange} />
                                        <label className="form-check-label" htmlFor="radiosexomacho">
                                            Macho
                                        </label>
                                    </div>
                                    <p>Macho</p>
                                </div>
                                <div>

                                    <div className="form-check femea" id="form">
                                        <input className="form-check-input" type="radio" name="sexo" id="radiosexofemea" value="fêmea" onChange={this.handleChange} />
                                        <label className="form-check-label" htmlFor="radiosexofemea">
                                            Fêmea
                                        </label>
                                    </div>
                                    <p>Fêmea</p>
                                </div>
                            </div>
                        </div>
                        <div className="conjuntoAnimal">
                            <label htmlFor="form">Tipo de Animal</label>
                            <div class="colunaAnimalForm">
                                <div>
                                    <div className="form-check cao" id="form">
                                        <input className="form-check-input" type="radio" name="tipo_animal" id="radiocachorro" value="Cachorro" onChange={this.handleChange} />
                                        <label className="form-check-label" htmlFor="radiocachorro">
                                            Cachorro
                                        </label>
                                    </div>
                                    <p>Cachorro</p>
                                    </div>
                                    <div>
                                    <div className="form-check gato">
                                        <input className="form-check-input" type="radio" name="tipo_animal" id="radiogato" value="Gato" onChange={this.handleChange} />
                                        <label className="form-check-label" htmlFor="radiogato">
                                            Gato
                                        </label>
                                    </div>
                                    <p>Gato</p>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="form-group" className="Porte">
                        <label htmlFor="porte">Selecione o Porte</label>
                        <select className="form-control" id="porte" name="porte" onChange={this.handleChange} value={this.state.porte}>
                            <option>Médio</option>
                            <option>Grande</option>
                            <option>Pequeno</option>
                        </select>
                    </div>
                    <div className="form-group" className={this.state.tipo_animal == "Cachorro" || "hidden"}>
                        <label htmlFor="raca">Selecione a Raça</label>
                        <select className="form-control" id="raca" name="raca" onChange={this.handleChange} value={this.state.raca}>
                            <option>Pit Bull</option>
                            <option>Pastor Alemão</option>
                            <option>Pincher</option>
                            <option>Pitbull</option>
                            <option>SRD</option>
                        </select>
                    </div>
                    <div className="form-group" className={this.state.tipo_animal == "Gato" || "hidden"}>
                        <label htmlFor="raca">Selecione a Raça</label>
                        <select className="form-control" id="raca" name="raca" value={this.state.raca} onChange={this.handleChange}>
                            <option>Angora</option>
                            <option>Siames</option>
                            <option>Burmese</option>
                            <option>Rajado</option>
                            <option>SRD</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="raca">Selecione a Cor</label>
                        <select className="form-control" id="cor" name="cor" onChange={this.handleChange} value={this.state.cor}>
                            <option>Branco</option>
                            <option>Preto</option>
                            <option>Alaranjado</option>
                            <option>Tricolor</option>
                            <option>Caramelo</option>
                        </select>
                    </div>
                    <br />
                    <input type="file" name="avatar" className="form-cadastro img inputfile" onChange={this.handleChange} />
                    <br />
                    <br />
                    <div className="botaocentralizado">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </>
        );
    }
}
