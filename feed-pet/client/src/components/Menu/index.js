import "./styles.css";
import { DropdownButton, Dropdown, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ModalGerarAlertaMenu } from "../ComponentsReact/AlertaAnimal/ModalGerarAlerta";
import { ModalAlertaMenu } from "../ComponentsReact/AlertaAnimal/ModalAlerta";
import { ModalChat } from "../ComponentsReact/Notificacoes/ChatNotificacoes";
import { useEffect, useState } from "react";
import { MapaInterativo } from "../ComponentsReact/GoogleMaps";
const jwt = require('jsonwebtoken');


// ${token.sub}
export function Menu(props) {
  const token = jwt.decode(localStorage.getItem("access-token"), process.env.REACT_APP_REFRESH_TOKEN_SECRET)
  const [pagAtual, setpagAtual] = useState('')
  useEffect(async () => {
    let local = window.location.href
    let pag = local.split('http://localhost:3001/');
    console.log(pag)
    setpagAtual(pag[1])
  }, [])
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light menu">
        <div className="container-fluid navItensColapse">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img src='https://i.imgur.com/rsUpwDc.png' height="60" alt="10" loading="lazy" id="imagemlogo" />
            </a>
            <div className="menuConteudo">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item"><NavLink exact to="/" activeClassName="selected" className="nav-link" id="teste" onClick={e => setpagAtual('home')}>Home</NavLink></li>
                <li className="nav-item"><NavLink to="/postagens" activeClassName="selected" className="nav-link" id="teste" onClick={e => setpagAtual('postagens')}>Feed</NavLink></li>
                {token && <li className="nav-item"><NavLink to="/chat" activeClassName="selected" className="nav-link" id="teste" onClick={e => setpagAtual('chat')}>Chats</NavLink></li>}
                <li className="nav-item"><NavLink exact to="/mapa" activeClassName="selected" className="nav-link"  id="teste" onClick={e => setpagAtual('mapa')}>Mapa</NavLink></li>
                <li className="nav-item"><NavLink exact to="/PaginaNoticias" activeClassName="selected" className="nav-link"  id="teste" onClick={e => setpagAtual('noticias')}>Noticias</NavLink></li>
              </ul>
            </div >
          </div>

          {!token &&
              <div class="nav-fill">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><NavLink exact to="/login" activeClassName="selected" className="nav-link"  id="teste" onClick={e => setpagAtual('login')}>Login</NavLink></li>
                  <li className="nav-item"><NavLink exact to="/cadastro" activeClassName="selected" className="nav-link"  id="teste" onClick={e => setpagAtual('cadastro')}>Cadastro</NavLink></li>

                </ul>
              </div>
            }
          <div className="d-flex align-items-center">

            
            <ModalAlertaMenu />
            {token &&
            <ModalGerarAlertaMenu />
            }
            {pagAtual != "chat" && token &&
              <ModalChat />
            }
            {token &&
              <DropdownButton
                id="dropdown"
                className="botaopesquisa"
                prefixes={{ btn: "botaopesquisa" }}
                title={<img src='https://i.imgur.com/Pm6cTZh.png' className="lupa" ></img>}
                variant="flat"
              >
                <Dropdown.Item><li><NavLink to={`/perfil-usuario/${token?.sub}`} activeClassName="selected" className="link-drop" onClick={e => setpagAtual('perfil-usuario')}>Perfil-Usuario</NavLink></li></Dropdown.Item>
                <Dropdown.Item><li><NavLink to="/animais" activeClassName="selected" className="link-drop" onClick={e => setpagAtual('animais')}>Meus Animais</NavLink></li></Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/logoff" activeClassName="selected" className="link-drop">
                    Log Out
                  </NavLink>
                </Dropdown.Item>
              </DropdownButton>
            }
          </div>
        </div>
      </nav>

    </>
  );
}
