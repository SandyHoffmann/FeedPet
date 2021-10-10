import img from "../../assets/logofinalhome.png";
import "./styles.css";
import { CgMenuGridO } from "react-icons/cg";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import imgdog from "../../assets/doguinho.jpg";
import { AiOutlineAlert } from 'react-icons/ai';

import menu from '../../assets/menu-nav.png';
import { ModalAlerta } from "../ComponentsReact/PostagemPage/ModalAlerta";
import { ModalGerarAlerta } from "../ComponentsReact/PostagemPage/ModalGerarAlerta";
import { ModalGerarAlertaMenu } from "../ComponentsReact/AlertaAnimal/ModalGerarAlerta";
const jwt = require('jsonwebtoken');


// ${token.sub}
export function Menu(props) {
  const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light menu">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img src={img} height="60" alt="10" loading="lazy" id="imagemlogo" />
            </a>
            <div class="nav-fill">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink exact to="/" activeClassName="selected" className="nav-link" id="teste">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/postagens" activeClassName="selected" className="nav-link" id="teste">Postagens</NavLink></li>
                <li className="nav-item">
                  <a className="nav-link" id="teste" href="#">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="teste" href="#">
                   Pesquisa de usúario
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <ModalAlerta/>
            <ModalGerarAlertaMenu/>
            <DropdownButton
              id="dropdown"
              className="botaopesquisa"
              prefixes={{ btn: "botaopesquisa" }}
              title={<img src={menu} className="lupa" ></img>}
              variant="flat"
            >              
              <Dropdown.Item><li><NavLink to="/perfil" activeClassName="selected" className="link-drop">Perfil</NavLink></li></Dropdown.Item>
              <Dropdown.Item><li><NavLink to={`/perfil-usuario/${token?.sub}`} activeClassName="selected" className="link-drop">Perfil-Usuario</NavLink></li></Dropdown.Item>
              <Dropdown.Item><li><NavLink to="/animais" activeClassName="selected" className="link-drop">Meus Animais</NavLink></li></Dropdown.Item>
              <Dropdown.Item><li><NavLink to="/editar-perfil" activeClassName="selected" className="link-drop">Editar Perfil</NavLink></li></Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/logoff" activeClassName="selected" className="link-drop">
                  Log Out
                </NavLink>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </nav>
    </>
  );
}
