import "./styles.css";
import imgpost from "../../assets/icone1.png";
import imgsrd from "../../assets/srd.jpg";
import imgperfil from "../../assets/amyperfil.jpg";
import Perfilpessoa from "../Userprofile/Userprofile";




export function PaginaPessoa(props) {
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
                  <img src={imgperfil} alt=""></img>
                 
                </div>

                <div className="profile-header-info">
                  <h4 className="m-t-10 m-b-5">Amy</h4>
                  <p className="m-b-10">Tutora</p>
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
                        {/* <span className="pull-right text-muted">18 Views</span> */}
                      </div>
                      <div className="timeline-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc faucibus turpis quis tincidunt luctus. Nam
                          sagittis dui in nunc consequat, in imperdiet nunc
                          sagittis.
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
                        >
                          <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>{" "}
                          Like
                        </a>
                        <a
                          href="javascript:;"
                          className="m-r-15 text-inverse-lighter"
                        >
                          <i className="fa fa-comments fa-fw fa-lg m-r-3"></i>{" "}
                          Comment
                        </a>
                        <a
                          href="javascript:;"
                          className="m-r-15 text-inverse-lighter"
                        >
                          <i className="fa fa-share fa-fw fa-lg m-r-3"></i>{" "}
                          Share
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
                                  className="btn btn-primary f-s-12 rounded-corner"
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
                          <img
                            src={imgperfil}
                            alt=""
                          ></img>
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
                        >
                          <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>{" "}
                          Like
                        </a>
                        <a
                          href="javascript:;"
                          className="m-r-15 text-inverse-lighter"
                        >
                          <i className="fa fa-comments fa-fw fa-lg m-r-3"></i>{" "}
                          Comment
                        </a>
                        <a
                          href="javascript:;"
                          className="m-r-15 text-inverse-lighter"
                        >
                          <i className="fa fa-share fa-fw fa-lg m-r-3"></i>{" "}
                          Share
                        </a>
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
                          <img
                            src={imgperfil}
                            alt=""
                          ></img>
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
                          consequat sapien sit amet nibh molestie placerat.
                          Donec nulla quam, ullamcorper ut velit vitae, lobortis
                          condimentum magna. Suspendisse mollis in sem vel
                          mollis.
                          <i className="fa fa-quote-right fa-fw pull-right"></i>
                        </p>
                      </div>
                      <div className="timeline-footer">
                        <a
                          href="javascript:;"
                          className="m-r-15 text-inverse-lighter"
                        >
                          <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>{" "}
                          Like
                        </a>
                        <a
                          href="javascript:;"
                          className="m-r-15 text-inverse-lighter"
                        >
                          <i className="fa fa-comments fa-fw fa-lg m-r-3"></i>{" "}
                          Comment
                        </a>
                        <a
                          href="javascript:;"
                          className="m-r-15 text-inverse-lighter"
                        >
                          <i className="fa fa-share fa-fw fa-lg m-r-3"></i>{" "}
                          Share
                        </a>
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
                          <img
                            src={imgperfil}
                            alt=""
                          ></img>
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
                          unde vero et galisum explicabo aut dolore soluta et
                          fuga doloribus in ipsa fugit non consequatur ipsum!
                          Hic enim magnam aut obcaecati cupiditate qui
                          voluptatem amet. Eum adipisci commodi et accusamus
                          dolorem est quis facere ut magni velit. Sed delectus
                          accusamus quo vero rerum ut odio earum.
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
                        >
                          {/* <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>{" "}
                          Like
                        </a>
                        <a
                          href="javascript:;"
                          className="m-r-15 text-inverse-lighter"
                        >
                          <i className="fa fa-comments fa-fw fa-lg m-r-3"></i>{" "}
                          Comment
                        </a>
                        <a
                          href="javascript:;"
                          className="m-r-15 text-inverse-lighter"
                        >
                          <i className="fa fa-share fa-fw fa-lg m-r-3"></i>{" "}
                      Share*/}
                        </a>
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
        </div>
      </div>
    </div>
  );
}
