import "./styles.css";
import imgpost from "../../assets/icone1.png";
import imgsrd from "../../assets/srd.jpg";
import love from "../../assets/likeredondo.png";
import food from "../../assets/food-bowl.png";
import bed from "../../assets/pet-bed.png";
import local from "../../assets/local.png";
import User from "../Userprofile/Userprofile";

export function TestePerfilUsuario(props) {
  return (
    <>
      <section class="section about-section gray-bg" id="about">
        <div class="container bodyDog" id="cabecalho">
          <div class="row align-items-center flex-row-reverse" id="boxsobrefotos">
            <div class="col-lg-6" id="sobreanimal">
              <div class="about-text go-to">
                <h3 class="dark-color">Sem nome</h3>
                <h6 class="theme-color lead">Um doguinho muito amoroso!</h6>
                <p>
                  Calmo, dócil com crianças e outros animais. Está procurando um
                  lar amoroso pra chamar de seu!
                </p>
                <div class="row about-list" id="lista">
                  <div class="col-md-6">
                    <div class="small">
                      <label>COR</label>
                      <p>Preto</p>
                    </div>
                    <div class="small">
                      <label>TUTOR</label>
                      <p>Sem tutor</p>
                    </div>
                    <div class="small">
                      <label>RAÇA</label>
                      <p>SRD</p>
                    </div>
                    <div class="small">
                      <label>PORTE</label>
                      <p>Médio</p>
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
                      <p>Macho</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="about-avatar">
                <img id="perfilcachorro" src={imgsrd} />
              </div>
            </div>
          </div>
          <div class="counter">
            <div class="row">
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" id="icones" data-to="500" data-speed="500">
                    <img src={love}></img>
                  </h6>
                  <p class="m-0px font-w-600">100 likes</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" id="icones" data-to="150" data-speed="150">
                  <img src={food}></img>
                  </h6>
                  <p class="m-0px font-w-600">Alimentado 7x</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" id="icones" data-to="850" data-speed="850">
                  <img src={bed}></img>
                  </h6>
                  <p class="m-0px font-w-600">Dormiu em 7 locais</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" id="icones" data-to="190" data-speed="190">
                  <img src={local}></img>
                  </h6>
                  <p class="m-0px font-w-600">Visto em Timbó</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="linhatempo">
        <div className="profile-content">
          <div className="tab-content p-0">
            <div className="tab-pane fade active show" id="profile-post">
              <ul className="timeline">
                <li>
                  <div className="timeline-time">
                    <span className="date">today</span>
                    <span className="time">07:20</span>
                  </div>

                  <div className="timeline-icon">
                    <a href="javascript:;">&nbsp;</a>
                  </div>

                  <div className="timeline-body">
                    <div className="timeline-header">
                      <span className="userimage">
                        <img src={imgpost} alt=""></img>
                      </span>
                      <span className="username">Sabrina</span>
                    </div>
                    <div className="timeline-content">
                      <p>
                        Alimentei hoje no bairro Capitais em Timbó
                      </p>
                    </div>
                    <div className="timeline-likes">
                      <div className="stats">
                        <span className="fa-stack fa-fw stats-icon">
                          <i className="fa fa-circle fa-stack-2x text-danger"></i>
                          <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                        </span>
                        <span className="fa-stack fa-fw stats-icon">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                        </span>
                        {/* <span className="stats-total">4.3k</span> */}
                      </div>
                      <div className="timeline-footer"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-time">
                    <span className="date">today</span>
                    <span className="time">07:20</span>
                  </div>

                  <div className="timeline-icon">
                    <a href="javascript:;">&nbsp;</a>
                  </div>

                  <div className="timeline-body">
                    <div className="timeline-header">
                      <span className="userimage">
                        <img src={imgpost} alt=""></img>
                      </span>
                      <span className="username">Sabrina</span>
                    </div>
                    <div className="timeline-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc faucibus turpis quis tincidunt luctus. Nam sagittis
                        dui in nunc consequat, in imperdiet nunc sagittis.
                      </p>
                    </div>
                    <div className="timeline-likes">
                      <div className="stats">
                        <span className="fa-stack fa-fw stats-icon">
                          <i className="fa fa-circle fa-stack-2x text-danger"></i>
                          <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                        </span>
                        <span className="fa-stack fa-fw stats-icon">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                        </span>
                        {/* <span className="stats-total">4.3k</span> */}
                      </div>
                      <div className="timeline-footer"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-time">
                    <span className="date">today</span>
                    <span className="time">07:20</span>
                  </div>

                  <div className="timeline-icon">
                    <a href="javascript:;">&nbsp;</a>
                  </div>

                  <div className="timeline-body">
                    <div className="timeline-header">
                      <span className="userimage">
                        <img src={imgpost} alt=""></img>
                      </span>
                      <span className="username">Sabrina</span>
                    </div>
                    <div className="timeline-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc faucibus turpis quis tincidunt luctus. Nam sagittis
                        dui in nunc consequat, in imperdiet nunc sagittis.
                      </p>
                    </div>
                    <div className="timeline-likes">
                      <div className="stats">
                        <span className="fa-stack fa-fw stats-icon">
                          <i className="fa fa-circle fa-stack-2x text-danger"></i>
                          <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                        </span>
                        <span className="fa-stack fa-fw stats-icon">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                        </span>
                        {/* <span className="stats-total">4.3k</span> */}
                      </div>
                      <div className="timeline-footer"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
      </>

  );
}
