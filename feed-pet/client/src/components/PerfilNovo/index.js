import imgsrd from "../../assets/srd.jpg";
import perfil from "../../assets/amyperfil.jpg";
import "./styles.css";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import cachorro from "../../assets/doguinho.jpg";
import gato from "../../assets/gato.jpg";
import gatinho from "../../assets/gatinho.jpeg";

export function Perfilnovo(props) {
  return (
    <>
      <section id="container-total" className="container">
        <div className="page-heading" id="bordaheading">
          <div className="media clearfix">
            <div className="media-left pr30">
              <a href="#">
                <img
                  className="media-object mw150"
                  src={perfil}
                  alt="..."
                ></img>
              </a>
            </div>
            <div className="media-body ">
              <h2 className="media-heading">
                Usuário da Silva
              </h2>
              <p className="lead" id="texto-sobre">
                Lorem ipsum dolor sit amet ctetur adicing elit, sed do eiusmod
                tempor incididunt
              </p>
              <div className="media-links">
                <ul className="list-inline list-unstyled" id="lista">
                  <li>
                    <a href="#" title="facebook link">
                      <img src={facebook} id="icone-facebook"></img>
                      {/* <span className="fa fa-facebook-square fs35 text-primary"></span> */}
                    </a>
                  </li>
                  <li>
                    <a href="#" title="twitter link">
                      <img src={twitter} id="icone-twitter"></img>

                    </a>
                  </li>
                  <li>
                    <a href="#" title="instagram link">
                      <img src={instagram} id="icone-instagram"></img>

                    </a>
                  </li>
                  <li className="">
                    <a href="#" title="linkedin link">
                      <img src={linkedin} id="icone-linkedin"></img>

                    </a>
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="panel">
              <div className="panel-heading">
                <span className="panel-icon">
                  <i className="fa fa-star"></i>
                </span>
                <span className="panel-title"> Números do usuário</span>
              </div>
              <div className="panel-body pn">
                <table className="table mbn tc-icon-1 tc-med-2 tc-bold-last">
                  <tbody>
                    <tr>
                      <td>
                        <span className="fa fa-desktop text-warning"></span>
                      </td>
                      <td>Curtidas</td>
                      <td>
                        <i className="fa fa-caret-up text-info pr10"></i>367
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fa fa-microphone text-primary"></span>
                      </td>
                      <td>Comentários</td>
                      <td>
                        <i className="fa fa-caret-down text-danger pr10"></i>145
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fa fa-newspaper-o text-info"></span>
                      </td>
                      <td>Animais</td>
                      <td>
                        <i className="fa fa-caret-up text-info pr10"></i>5
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="panel">
              <div className="panel-heading">
                <span className="panel-icon">
                  <i className="fa fa-trophy"></i>
                </span>
                <span className="panel-title"> Sobre mim</span>
              </div>
              <div ClassName="texto-sobre-mim" id="sobremim">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam commodo scelerisque tortor, sit amet porta dui aliquet
                  eu. Maecenas et convallis quam. Integer dui tellus, vulputate
                  bibendum felis ac, rutrum dapibus elit. Nulla consequat enim
                  quis metus ultrices finibus. Quisque non magna malesuada,
                  auctor nunc nec, malesuada nisi. Phasellus pretium congue
                  condimentum.
                </p>
              </div>
            </div>
            <div className="panel">
              <div className="panel-heading">
                <span className="panel-icon">
                  <i className="fa fa-pencil"></i>
                </span>
                <span className="panel-title">Sobre mim</span>
              </div>
              <div className="panel-body pb5">
                <h6>Experience</h6>

                <h4>Facebook Internship</h4>
                <p className="text-muted">
                  {" "}
                  University of Missouri, Columbia
                  <br /> Student Health Center, June 2010 - 2012
                </p>

                <hr className="short br-lighter"></hr>

                <h6>Education</h6>

                <h4>Bachelor of Science, PhD</h4>
                <p className="text-muted">
                  {" "}
                  University of Missouri, Columbia
                  <br /> Student Health Center, June 2010 through Aug 2011
                </p>

                <hr className="short br-lighter"></hr>

                <h6>Accomplishments</h6>

                <h4>Successful Business</h4>
                <p className="text-muted pb10">
                  {" "}
                  University of Missouri, Columbia
                  <br /> Student Health Center, June 2010 through Aug 2011
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-block">
 
              {/* <div className="tab-content p30"> */}
                <div id="tab1" className="tab-pane active">
                  <div className="media">
                  <div className="panel">
                    <div className="panel-heading">
                      <span className="panel-icon">
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="panel-title"> Tutora de 3 animais</span>
                    </div>
                    <div className="media-body" id="caixaanimais">
                      {/* <h5 className="media-heading mb20">
                        <p>Tutora de 3 animais</p>
                      </h5> */}
                      <img src={gatinho} className="mw140 mr25 mb20 foto-animal"></img>
                      <img src={gatinho} className="mw140 mr25 mb20 foto-animal"></img>
                      <img src={gatinho} className="mw140 mr25 mb20 foto-animal"></img>
                      {/* <div className="media-links">
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-thumbs-o-up text-primary mr5"></span>{" "}
                          Like{" "}
                        </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-share text-primary mr5"></span>{" "}
                          Share{" "}
                        </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-floppy-o text-primary mr5"></span>{" "}
                          Save{" "}
                        </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-comment text-primary mr5"></span>{" "}
                          Comment{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="media mt25">
                    <a className="pull-left" href="#">
                      {" "}
                      <img
                        className="media-object mn thumbnail thumbnail-sm rounded mw40"
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt="..."
                      />{" "}
                    </a>
                    <div className="media-body mb5">
                      <h5 className="media-heading mbn">
                        Simon Rivers Posted
                        <small> - 3 hours ago</small>
                      </h5>
                      <p> Omg so freaking sweet dude.</p>
                      <div className="media pb10">
                        <a className="pull-left" href="#">
                          {" "}
                          <img
                            className="media-object mn thumbnail thumbnail-sm rounded mw40"
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt="..."
                          />{" "}
                        </a>
                        <div className="media-body mb5">
                          <h5 className="media-heading mbn">
                            Jessica Wong
                            <small> - 3 hours ago</small>
                          </h5>
                          <p>Omgosh I'm in love</p>
                        </div>
                      </div>
                      <div className="media mtn">
                        <a className="pull-left" href="#">
                          {" "}
                          <img
                            className="media-object mn thumbnail thumbnail-sm rounded mw40"
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            alt="..."
                          />{" "}
                        </a>
                        <div className="media-body mb5">
                          <h5 className="media-heading mbn">
                            Jessica Wong
                            <small> - 3 hours ago</small>
                          </h5>
                          <p>Omgosh I'm in love</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media mt25">
                    <a className="pull-left" href="#">
                      {" "}
                      <img
                        className="media-object thumbnail mw50"
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="..."
                      />{" "}
                    </a>
                    <div className="media-body">
                      <h5 className="media-heading mb20">
                        Simon Rivers Posted
                        <small> - 3 hours ago</small>
                      </h5>
                      <img src={imgsrd} className="mw140 mr25 mb20"></img>
                      <img src={imgsrd} className="mw140 mr25 mb20"></img>
                      <img src={imgsrd} className="mw140 mb20"></img>
                      <div className="media-links">
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-thumbs-o-up text-primary mr5"></span>{" "}
                          Like{" "}
                        </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-share text-primary mr5"></span>{" "}
                          Share{" "}
                        </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-floppy-o text-primary mr5"></span>{" "}
                          Save{" "}
                        </span>
                        <span className="text-light fs12 mr10">
                          <span className="fa fa-comment text-primary mr5"></span>{" "}
                          Comment{" "}
                        </span>
                      </div> */}
                    </div>
                  </div>
                  </div>
                {/* </div> */}
                
                <div id="tab2" className="tab-pane"></div>
                <div id="tab3" className="tab-pane"></div>
                <div id="tab4" className="tab-pane"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
