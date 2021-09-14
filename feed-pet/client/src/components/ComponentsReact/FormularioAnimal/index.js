import React from "react";
import { api } from "../../../service";
import "./styles.css"
export class FormAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome:"",
            raca:"",
            porte:"",
            cor:"",
            tipo_animal:"",
            status:""
        };
    }

    handleChange = e => {
        const value = e.target.value;
        const nome = e.target.name;
        this.setState({
            [nome]:value
        });
        console.log(this.state)
    }

    handleSubmit = async e => {
        try {
            e.preventDefault();
            alert({body:this.state})
            await api.post(`/usuarios/animais/${"c49ebd84-bba1-4b8e-9689-e20f0fabc661"}`,
            {"nome":this.state.nome,
            "cor": this.state.cor,
            "porte":"grande",
            "status": this.state.status,
            "tipo_animal":this.state.tipo_animal,
            "raca": this.state.raca,
        }
            )
            

        } catch (error) {
            console.log(this.state)
        }
    }

    // async componentDidMount(){
    //     try {
    //         await api.post("/animais/",{animal:this.state},{params:{id="c49ebd84-bba1-4b8e-9689-e20f0fabc661"}});
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    render() {
        const card = this.state.card;
        console.log(card)
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" class="form-control" id="nome" name="nome" aria-describedby="Nome" value={this.state.nome} onChange={this.handleChange} placeholder="Nome do Animal"/>
                </div>
                <label for="form">Tem dono?</label>
                <div class="form-check" id="form">
                    <input class="form-check-input" type="radio" name="status" id="radiotipo1" value="Tem dono" onChange={this.handleChange}/>
                    <label class="form-check-label" for="radiotipo1">
                        Sim
                    </label>
                </div>
                <div class="form-check" id="form">

                    <input class="form-check-input" type="radio" name="status" id="radiotipo2" value="Não possui dono" onChange={this.handleChange}/>
                    <label class="form-check-label" for="radiotipo2">
                        Não
                    </label>
                </div>
                <label for="form">Tipo de Animal</label>
                <div class="form-check" id="form">
                    <input class="form-check-input" type="radio" name="tipo_animal" id="exampleRadios1" value="Cachorro" onChange={this.handleChange}/>
                    <label class="form-check-label" for="exampleRadios1">
                        Cachorro
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="tipo_animal" id="exampleRadios2" value="Gato" onChange={this.handleChange}/>
                    <label class="form-check-label" for="exampleRadios2">
                        Gato
                    </label>
                </div>
                
                <div class="form-group" className={this.state.tipo_animal=="Cachorro" || "hidden"}>
                    <label for="raca">Selecione a Raça</label>
                    <select class="form-control" id="raca" name="raca" onChange={this.handleChange} value={this.state.raca}>
                        <option>Pit Bull</option>
                        <option>Pastor Alemão</option>
                        <option>Pincher</option>
                        <option>Pitbull</option>
                        <option>Vira Lata</option>
                    </select>
                </div>          
                <div class="form-group" className={this.state.tipo_animal=="Gato" || "hidden"}>
                    <label for="raca">Selecione a Raça</label>
                    <select class="form-control" id="raca" name="raca" onChange={this.handleChange} value={this.state.raca}>
                        <option>Angora</option>
                        <option>Siames</option>
                        <option>Gato Rebaixado</option>
                        <option>Rajado</option>
                        <option>Vira Lata</option>
                    </select>
                </div>          
                <div class="form-group">
                    <label for="raca">Selecione a Cor</label>
                    <select class="form-control" id="cor" name="cor" onChange={this.handleChange} value={this.state.cor}>
                        <option>Branco</option>
                        <option>Preto</option>
                        <option>Alaranjado</option>
                        <option>Tricolor</option>
                        <option>Caramelo</option>
                    </select>
                </div>          
                <button type="submit" class="btn btn-primary">Enviar</button>
                </form>            
            </>
        );
    }
}
