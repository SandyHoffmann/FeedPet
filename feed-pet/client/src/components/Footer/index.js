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
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
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
                <a href="#">
                  < FaGithub />
                </a>
                <a href="#">
                  <FaInstagram/>
                </a>
                <a href="#">
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
