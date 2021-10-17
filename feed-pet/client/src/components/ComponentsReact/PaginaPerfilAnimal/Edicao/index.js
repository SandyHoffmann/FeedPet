import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../../../../service";
import "./styles.css"
export function EdicaoAnimal(props) {
  const { id } = useParams();
  console.log(id)

  const [nome, setNome] = useState("")
  const [raca, setRaca] = useState("")
  const [porte, setPorte] = useState("")
  const [sexo, setSexo] = useState("")
  const [idade, setIdade] = useState("")
  const [cor, setCor] = useState("")
  const [avatar, setAvatar] = useState("")


  useEffect(() => {

  }, [])

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      console.log(formData)
      const res = await api.put(`/animais/${id}`,
        formData, {
        headers: {
          "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
        }
      });
      props.setinfo(res.data)
      let div = document.querySelectorAll(".animalEditar")
      div[0].className = "row about-list animalEditar invisivel"
      let divInvisivel = document.querySelectorAll("#lista")
      divInvisivel[0].className = "row about-list"
      // const animal = await api.post(`/usuarios/animais/${token.sub}`,
      //     formData, {
      //     headers: {
      //         "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
      //     }
      // });
    } catch (error) {

    }
  }
  // async function handleChange(e) {
  //     const value = e.target.value;
  //     const nome = e.target.name;
  //     setInformacoes({
  //         [nome]: value
  //     });
  //     // console.log(value)
  // }
  return (
    <>
      <form onSubmit={handleSubmit} className="row about-list formEdicao">
        <div className="corpoEdicao">
        <div class="conjuntoaEditar">
          <div >
            <div class="nomelabeledicao">

              <label>NOME</label>
              <p>
                <input placeholder={props.informacao.nome} onChange={e => { setNome(e.target.value) }} value={nome} name="nome"></input>
              </p>
            </div>
            <div class="small">
              <label>COR</label>
              <p>
                <input placeholder={props.informacao.cor} onChange={e => { setCor(e.target.value) }} value={cor} name="cor"></input>
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
                <select className="form-control" id="raca" name="raca" onChange={e => { setRaca(e.target.value) }} value={raca}>
                  <option>Pit Bull</option>
                  <option>Pastor Alemão</option>
                  <option>Pincher</option>
                  <option>Pitbull</option>
                  <option>Vira Lata</option>
                </select>
              </div>
              <div className="form-group" className={props.informacao.tipo_animal == "Gato" || "hidden"}>
                <select className="form-control" id="raca" name="raca" onChange={e => { setRaca(e.target.value) }} value={raca} placeholder={props.informacao.raca}>
                  <option>Angora</option>
                  <option>Siames</option>
                  <option>Gato Rebaixado</option>
                  <option>Rajado</option>
                  <option>Vira Lata</option>
                </select>
              </div>
            </div>
            <div className="small .select">
              <label>PORTE</label>
              <div className="form-group" className="Porte">
                <select className="form-control" id="porte" name="porte" onChange={e => { setPorte(e.target.value) }} value={porte} placeholder={props.informacao.porte}>
                  <option>Médio</option>
                  <option>Grande</option>
                  <option>Pequeno</option>
                </select>
              </div>
            </div>
          </div>

        </div>
        <div class="conjuntoaEditar">
          <div>
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
            <div class="small sexoedicao">
              <label>SEXO</label>
              <div className="conjuntoAnimal">
                <div className="colunaAnimalForm">
                  <div>
                    <input className="form-check-input" type="radio" name="sexo" id="radiosexomacho" value="macho" onChange={e => { setSexo(e.target.value) }} />
                    <label className="form-check-label" htmlFor="radiosexomacho">
                      Macho
                    </label>
                  </div>

                  <div>

                    <input className="form-check-input" type="radio" name="sexo" id="radiosexofemea" value="fêmea" onChange={e => { setSexo(e.target.value) }} />
                    <label className="form-check-label" htmlFor="radiosexofemea">
                      Fêmea
                    </label>

                  </div>
                </div>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="small">
                <input type="file" name="avatar" className="form-cadastro img inputfile animalEditarImagem" onChange={e => { setAvatar(e.target.value) }} />
              </div>
            </div>
          </div>
        </div>

        </div>
        
        <br />
        <div className="centralizarBotao">
          <button className="btn botaoRosa">Concluir Mudanças</button>
        </div>
      </form>

    </>
  )

}