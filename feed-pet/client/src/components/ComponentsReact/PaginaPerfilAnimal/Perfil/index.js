import "./styles.css";
import imgpost from "../../../../assets/icone1.png";
import imgdog from "../../../../assets/doguinho.jpg"
import { useState, useEffect } from "react";
import { api } from "../../../../service";
import {useParams} from "react-router-dom";
import { AgendaAnimal } from "../Agenda";
import { FormularioAgenda } from "../FormularioAgenda";

export function PaginaAnimal(props) {
  const [informacoes,setInformacoes] = useState([])
  const { id } = useParams();
  console.log(id)
  useEffect(async () => {
    try {
        const res = await api.get(`/animais/geral/${id}`);
        const informacao = res.data;
        console.log(informacao)

        setInformacoes(informacao)

    } catch (error) {
        console.log(error)
    }
},[])

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="content" className="content content-full-width">
              <div className="profile">
                <div className="profile-header"></div>

                <div className="profile-header-cover"></div>

                <div className="profile-header-content">
                  <div className="profile-header-img">
                    <img src={imgdog} alt=""></img>
                  </div>

                  <div className="profile-header-info">
                    <h4 className="m-t-10 m-b-5">{informacoes.nome}</h4>
                    <p className="m-b-10">{informacoes.raca}</p>
                    <a href="#" className="btn btn-success">
                      Editar perfil
                    </a>
                  </div>
                </div>
                <br/>

                <ul className="profile-header-tab nav nav-tabs">
                  <li className="nav-item">
                    <a
                      href="#profile-post"
                      className="nav-link active show"
                      data-toggle="tab"
                    >
                      POSTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#profile-about"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#profile-photos"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      PHOTOS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#profile-videos"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      VIDEOS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#profile-friends"
                      className="nav-link"
                      data-toggle="tab"
                    >
                      FRIENDS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile-content">
              <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                  <ul className="timeline">
                  <AgendaAnimal/>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
