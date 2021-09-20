import img from "../../assets/logofinalhome.png";
import "./styles.css";
import { CgMenuGridO } from "react-icons/cg";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import imgdog from "../../assets/doguinho.jpg";
import { AiOutlineAlert } from 'react-icons/ai';

export function Menu(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light menu">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img src={img} height="80" alt="" loading="lazy" />
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
                    Pesquisa de usuário
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>

            <button type="button" class="btn btn-danger">{<AiOutlineAlert className="alertaanimal"/>}</button>

            <DropdownButton
              id="dropdown"
              className="botaopesquisa"
              prefixes={{ btn: "botaopesquisa" }}
              title={<CgMenuGridO className="lupa" />}
              variant="flat"
            >
              
              <Dropdown.Item><li><NavLink to="/perfil" activeClassName="selected" className="link-drop">Perfil</NavLink></li></Dropdown.Item>
              <Dropdown.Item><li><NavLink to="/animais" activeClassName="selected" className="link-drop">Meus Animais</NavLink></li></Dropdown.Item>
              <Dropdown.Item><li><NavLink to="/editar-perfil" activeClassName="selected" className="link-drop">Editar Perfil</NavLink></li></Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Log Out
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </nav>
    </>
  );
}
