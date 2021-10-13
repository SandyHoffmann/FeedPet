import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function EdicaoAnimal(props) {
    const { id } = useParams();
    console.log(id)
    
    const [nome,setNome]=useState(props.informacao.nome)
    const [raca,setRaca]=useState(props.informacao.raca)
    const [porte,setPorte]=useState(props.informacao.porte)
    const [sexo,setSexo]=useState(props.informacao.sexo)
    const [idade,setIdade]=useState(props.informacao.idade)
    const [cor,setCor]=useState(props.informacao.cor)

   
    useEffect(() => {
        
    },[])

    // async function handleSubmit(){
    //     try {
    //         const animal = await api.post(`/usuarios/animais/${token.sub}`,
    //             formData, {
    //             headers: {
    //                 "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
    //             }
    //         });
    //     } catch (error) {
            
    //     }
    // }
    // async function handleChange(e) {
    //     const value = e.target.value;
    //     const nome = e.target.name;
    //     setInformacoes({
    //         [nome]: value
    //     });
    //     // console.log(value)
    // }
    return(
        <>
            <div class="col-md-6">
                    <div class="small">
                      <label>COR</label>
                      <p>
                      <input placeholder={props.informacao.cor} onChange={e => {setCor(e.target.value)}} value={cor} name="cor"></input>
                        </p>
                    </div>
                    <div class="small">
                      <label>TUTOR</label>
                      <p>
                        {props.dono.nome}
                      </p>
                    </div>
                    <div class="small">
                      <label>RACA</label>
                      <div className="form-group" className={props.informacao.tipo_animal == "Cachorro" || "hidden"}>
                            <select className="form-control" id="raca" name="raca" onChange={e => {setRaca(e.target.value)}} value={raca}>
                                <option>Pit Bull</option>
                                <option>Pastor Alemão</option>
                                <option>Pincher</option>
                                <option>Pitbull</option>
                                <option>Vira Lata</option>
                            </select>
                        </div>
                        <div className="form-group" className={props.informacao.tipo_animal == "Gato" || "hidden"}>
                            <select className="form-control" id="raca" name="raca" onChange={e => {setRaca(e.target.value)}} value={raca}>
                                <option>Angora</option>
                                <option>Siames</option>
                                <option>Gato Rebaixado</option>
                                <option>Rajado</option>
                                <option>Vira Lata</option>
                            </select>
                        </div>
                    </div>
                    <div class="small">
                      <label>PORTE</label>
                      <div className="form-group" className="Porte">
                        <select className="form-control" id="porte" name="porte" onChange={e => {setPorte(e.target.value)}} value={porte}>
                            <option>Médio</option>
                            <option>Grande</option>
                            <option>Pequeno</option>
                        </select>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="small">
                      <label>ENDEREÇO</label>
                      <p>Visto em Indaial</p>
                    </div>
                    <div class="small">
                      <label>CASTRADO</label>
                      <p>Não</p>
                    </div>
                    <div class="small">
                      <label>PELO</label>
                      <p>Pelo curto</p>
                    </div>
                    <div class="small">
                      <label>SEXO</label>
                      <div className="conjuntoAnimal">
                            <div className="colunaAnimalForm">
                                <div>
                                        <input className="form-check-input" type="radio" name="sexo" id="radiosexomacho" value="macho" onChange={e => {setSexo(e.target.value)}} />
                                        <label className="form-check-label" htmlFor="radiosexomacho">
                                            Macho
                                        </label>
                                    </div>
                                    
                                <div>

                                        <input className="form-check-input" type="radio" name="sexo" id="radiosexofemea" value="fêmea" onChange={e => {setSexo(e.target.value)}} />
                                        <label className="form-check-label" htmlFor="radiosexofemea">
                                            Fêmea
                                        </label>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>

                  </div>
                  <div className="centralizarBotao">
                  <button className="btn botaoRosa">Concluir Mudanças</button>
                  </div>

            </>
    )

}