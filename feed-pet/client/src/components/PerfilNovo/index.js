import perfil from "../../assets/amyperfil.jpg";
import "./styles.css";
import imgperfil from "../../assets/srd.jpg";
import imgpost from "../../assets/dogito.jpeg";
import { Carousel, Col, Image } from "react-bootstrap";
import dogcard from "../../assets/dogito.jpeg";
import gato from "../../assets/gatinho.jpeg";
import tutor from "../../assets/tutor.png";
import bed from "../../assets/pet-bed.png";
import ajudou from "../../assets/ajudou.png";
import local from "../../assets/local.png";

export function Perfilnovo(props) {
  return (
    <>
      <section id="container-total" className="container">
        <div className="perfilFlex">
          <div className="panel totalperfil" id="bordaheading">
            <div className="informacoesUsuario">
              <div className="fotoUsuario ">
                <a href="#">
                <Col xs={6} md={4}>
                  <Image src={perfil} thumbnail />
                </Col>
                  
                </a>
              </div>
              <div className="media-body ">
                <h2 className="media-heading">Usuário da Silva</h2>
                <p className="lead" id="texto-sobre">
                  Lorem ipsum dolor sit amet ctetur adicing elit, sed do eiusmod
                  tempor incididunt
                </p>
                <div class="counter counter-perfil-pessoa" >
                  {/* <div class="row"> */}
                    <div class="iconesPerfil">
                      <div>
                        <h6
                          class="count h2"
                          id="icones"
                          data-to="500"
                          data-speed="500"
                        >
                          <img src={ajudou}></img>
                        </h6>
                        <p class="m-0px font-w-600">Ajudou 5 animais</p>
                      </div>
                    </div>
                    <div>
                      <div class="count-data text-center">
                        <h6
                          class="count h2"
                          id="icones"
                          data-to="850"
                          data-speed="850"
                        >
                          <img src={tutor}></img>
                        </h6>
                        <p class="m-0px font-w-600">Tutor de 3 animais</p>
                      </div>
                    </div>
                    <div>
                      <div class="count-data text-center">
                        <h6
                          class="count h2"
                          id="icones"
                          data-to="190"
                          data-speed="190"
                        >
                          <img src={local}></img>
                        </h6>
                        <p class="m-0px font-w-600">Mora em Timbó</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className="animais animaisPerfil">
              <div className="sliderAnimalPerfil">
                <Carousel id="carouselAnimaisPessoa">
                  <Carousel.Item>
                    <img
                      className="carouselAnimal"
                      id="fotoCarousel"
                      src={dogcard}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>1 slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="carouselAnimal"
                      id="fotoCarousel"
                      src={gato}
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>2 slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="carouselAnimal"
                      id="fotoCarousel"
                      src={dogcard}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>3 slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
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
                        <img src={imgperfil} alt=""></img>
                      </span>
                      <span className="username">Amy</span>
                      <span className="pull-right text-muted">18 Views</span>
                    </div>
                    <div className="timeline-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc faucibus turpis quis tincidunt luctus. Nam sagittis
                        dui in nunc consequat, in imperdiet nunc sagittis.
                      </p>
                    </div>
                    <div className="timeline-likes">
                      <div className="stats-right">
                        <span className="stats-text">259 Shares</span>
                        <span className="stats-text">21 Comments</span>
                      </div>
                      <div className="stats">
                        <span className="fa-stack fa-fw stats-icon">
                          <i className="fa fa-circle fa-stack-2x text-danger"></i>
                          <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                        </span>
                        <span className="fa-stack fa-fw stats-icon">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                        </span>
                        <span className="stats-total">4.3k</span>
                      </div>
                    </div>
                    <div className="timeline-footer">
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>{" "}
                        Like
                      </a>
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-comments fa-fw fa-lg m-r-3"></i>{" "}
                        Comment
                      </a>
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share
                      </a>
                    </div>
                    <div className="timeline-comment-box">
                      <div className="user">
                        <img src={imgpost}></img>
                      </div>
                      <div className="input">
                        <form action="">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control rounded-corner"
                              placeholder="Write a comment..."
                            ></input>
                            <span className="input-group-btn p-l-10">
                              <button
                                className="btn f-s-12 rounded-corner btn-green"
                                id="botao-comentario"
                                type="button"
                              >
                                Comment
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-time">
                    <span className="date">yesterday</span>
                    <span className="time">20:17</span>
                  </div>

                  <div className="timeline-icon">
                    <a href="javascript:;">&nbsp;</a>
                  </div>
                  <div className="timeline-body">
                    <div className="timeline-header">
                      <span className="userimage">
                        <img src={imgperfil} alt=""></img>
                      </span>
                      <span className="username">Amy</span>
                      {/* <span className="pull-right text-muted">82 Views</span> */}
                    </div>
                    <div className="timeline-content">
                      <p>Localização: Blumenau</p>
                    </div>
                    <div className="timeline-footer">
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>{" "}
                        Like
                      </a>
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-comments fa-fw fa-lg m-r-3"></i>{" "}
                        Comment
                      </a>
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share
                      </a>
                    </div>
                    <div className="timeline-comment-box">
                      <div className="user">
                        <img src={imgpost}></img>
                      </div>
                      <div className="input">
                        <form action="">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control rounded-corner"
                              placeholder="Write a comment..."
                            ></input>
                            <span className="input-group-btn p-l-10">
                              <button
                                className="btn f-s-12 rounded-corner btn-green"
                                id="botao-comentario"
                                type="button"
                              >
                                Comment
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-time">
                    <span className="date">24 Agosto 2021</span>
                    <span className="time">08:17</span>
                  </div>

                  <div className="timeline-icon">
                    <a href="javascript:;">&nbsp;</a>
                  </div>

                  <div className="timeline-body">
                    <div className="timeline-header">
                      <span className="userimage">
                        <img src={imgperfil} alt=""></img>
                      </span>
                      <span className="username">Amy</span>
                      {/* <span className="pull-right text-muted">
                  1,282 Views
                </span> */}
                    </div>
                    <div className="timeline-content">
                      <p className="lead">
                        <i className="fa fa-quote-left fa-fw pull-left"></i>
                        Quisque sed varius nisl. Nulla facilisi. Phasellus
                        consequat sapien sit amet nibh molestie placerat. Donec
                        nulla quam, ullamcorper ut velit vitae, lobortis
                        condimentum magna. Suspendisse mollis in sem vel mollis.
                        <i className="fa fa-quote-right fa-fw pull-right"></i>
                      </p>
                    </div>
                    <div className="timeline-footer">
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>{" "}
                        Like
                      </a>
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-comments fa-fw fa-lg m-r-3"></i>{" "}
                        Comment
                      </a>
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share
                      </a>
                    </div>
                    <div className="timeline-comment-box">
                      <div className="user">
                        <img src={imgpost}></img>
                      </div>
                      <div className="input">
                        <form action="">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control rounded-corner"
                              placeholder="Write a comment..."
                            ></input>
                            <span className="input-group-btn p-l-10">
                              <button
                                className="btn f-s-12 rounded-corner btn-green"
                                id="botao-comentario"
                                type="button"
                              >
                                Comment
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
                <li> 
                  <div className="timeline-time">
                    <span className="date">10 Julho 2021</span>
                    <span className="time">20:43</span>
                  </div>

                  <div className="timeline-icon">
                    <a href="javascript:;">&nbsp;</a>
                  </div>

                  <div className="timeline-body">
                    <div className="timeline-header">
                      <span className="userimage">
                        <img src={imgperfil} alt=""></img>
                      </span>
                      <span className="username">Amy</span>
                      {/* <span className="pull-right text-muted">
                  1,021,282 Views
                </span> */}
                    </div>
                    <div className="timeline-content">
                      <p className="lead">
                        <i className="fa fa-quote-left fa-fw pull-left"></i>
                        Lorem ipsum dolor sit amet. Et corrupti repellendus ut
                        unde vero et galisum explicabo aut dolore soluta et fuga
                        doloribus in ipsa fugit non consequatur ipsum! Hic enim
                        magnam aut obcaecati cupiditate qui voluptatem amet. Eum
                        adipisci commodi et accusamus dolorem est quis facere ut
                        magni velit. Sed delectus accusamus quo vero rerum ut
                        odio earum.
                        <i className="fa fa-quote-right fa-fw pull-right"></i>
                      </p>
                    </div>
                    <div className="timeline-content">
                      <p className="m-t-20">
                        <img
                          src="../assets/img/gallery/gallery-5.jpg"
                          alt=""
                        ></img>
                      </p>
                    </div>
                    <div className="timeline-footer">
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>{" "}
                        Like
                      </a>
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-comments fa-fw fa-lg m-r-3"></i>{" "}
                        Comment
                      </a>
                      <a
                        href="javascript:;"
                        className="m-r-15 text-inverse-lighter"
                        id="opcoes"
                      >
                        <i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share
                      </a>
                    </div>
                    <div className="timeline-comment-box">
                      <div className="user">
                        <img src={imgpost}></img>
                      </div>
                      <div className="input">
                        <form action="">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control rounded-corner"
                              placeholder="Write a comment..."
                            ></input>
                            <span className="input-group-btn p-l-10">
                              <button
                                className="btn f-s-12 rounded-corner btn-green"
                                id="botao-comentario"
                                type="button"
                              >
                                Comment
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-icon">
                    <a href="javascript:;">&nbsp;</a>
                  </div>

                  <div className="timeline-body">Loading...</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
