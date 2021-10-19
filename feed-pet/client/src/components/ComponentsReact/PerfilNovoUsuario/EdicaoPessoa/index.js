import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../../../../service";
import "./styles.css"
export function EdicaoPessoa(props) {
  const { id } = useParams();
  console.log(id)

  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [avatar, setAvatar] = useState("")


  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      console.log(formData)
      let p = document.querySelectorAll(".carregando")
      p[0].className = "carregando loader"
      const res = await api.put(`/usuarios/${id}`,
        formData, {
        headers: {
          "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
        }
      });
      props.setinfo(res.data)
      p[0].className = "carregando"
      let div = document.querySelectorAll(".pessoaEditar")
      div[0].className = "pessoaEditar invisivel"
      let divInvisivel = document.querySelectorAll(".UsuarioDados")
      divInvisivel[0].className = "UsuarioDados"

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit} class="conjuntoaEditarPessoa">
        <div className="corpoEdicaoPessoa">
        <div >
          <div >

              <label>NOME</label>
              <p>
                <input placeholder={props.informacao.nome} onChange={e => { setNome(e.target.value) }} value={nome} name="nome"></input>
              </p>
              <textarea placeholder={'Escreva uma Descrição sobre você!'} onChange={e => { setDescricao(e.target.value) }} value={descricao} name="descricao"/>
              <div class="small">
                <input type="file" name="avatar" className="img inputfile" onChange={e => { setAvatar(e.target.value) }} />
              </div>            
        </div>
        </div>
        </div>

        <br />
        <div className="centralizarBotao">
          <button className="btn botaoRosa">Concluir Mudanças</button>
        </div>

        <br/>
      </form>

    </>
  )

}