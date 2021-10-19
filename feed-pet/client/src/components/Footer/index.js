import "./styles.css"
import { FaLinkedinIn , FaInstagram, FaGithub, FaFacebookF } from 'react-icons/fa';
import Userprofile from "../Userprofile/Userprofile";


export function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Serviços</h3>
                <ul>
                  <li>
                    <a href="#">Cadastramos Animais</a>
                  </li>
                  <li>
                    <a href="#">Cadastramos Alertas</a>
                  </li>
            
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Devs</h3>
                <ul>
                  <li>
                    <a href="#">Charles</a>
                  </li>
                  <li>
                    <a href="#">Lucas</a>
                  </li>
                  <li>
                    <a href="#">Luiz Eduardo</a>
                  </li>
                  <li>
                    <a href="#">Michelle</a>
                  </li>
                  <li>
                    <a href="#">Sandy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>FeedPet</h3>
                <p>
                  Site criado pela equipe Animalium com o objetivo de ajudar os pets de rua. Que tal alimentar ou dar abrigo a um animal que está precisando?
                </p>
              </div>
              <div className="col item social">
                <a href="#">
                  <FaFacebookF/>
                </a>
                <a href="https://github.com/SandyHoffmann/FeedPet.git">
                  < FaGithub />
                </a>
                <a href="https://www.instagram.com/projeto.feedpet/">
                  <FaInstagram/>
                </a>
                <a href="https://www.linkedin.com/in/equipe-animalium-102290221/">
                <FaLinkedinIn/>
                </a>
              </div>
            </div>
            <p className="copyright">FeedPet © 2021</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
