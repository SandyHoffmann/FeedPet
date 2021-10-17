// import { Modal, Button } from "react-bootstrap";
// import { useState } from "react";
// import alerta from "../../../../assets/alerta.png";
// import "./styles.css";
// import dogcard from "../../../../assets/dogito.jpeg";
// import gato from "../../../../assets/gatinho.jpeg";
// import { Carousel } from "react-bootstrap";

// export function ModalGerarAlerta(props) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button
//         classNameName="btn btn-danger"
//         id="botaogeraralerta"
//         onClick={handleShow}
//       >
//         {" "}
//         <img src={alerta}></img>
//       </Button>
//       <Modal show={show} onHide={handleClose} data-toggle="modal" size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title
//             className="example-modal-sizes-title-lg"
//             id="titulo-modal"
//           >
//             Cadastrar animal desaparecido
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="corpoModal">
//             <div className="modalFlex">
//               <div className="sliderAnimal">
//                 <Carousel id="carouselAnimaisPessoa">
//                   <Carousel.Item>
//                     <img
//                       className="carouselAnimal"
//                       id="fotoCarousel"
//                       src={dogcard}
//                       alt="First slide"
//                     />
//                     <Carousel.Caption>
//                       <h3>1 slide label</h3>
//                       <p>
//                         Nulla vitae elit libero, a pharetra augue mollis
//                         interdum.
//                       </p>
//                     </Carousel.Caption>
//                   </Carousel.Item>
//                   <Carousel.Item>
//                     <img
//                       className="carouselAnimal"
//                       id="fotoCarousel"
//                       src={gato}
//                       alt="Second slide"
//                     />

//                     <Carousel.Caption>
//                       <h3>2 slide label</h3>
//                       <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       </p>
//                     </Carousel.Caption>
//                   </Carousel.Item>
//                   <Carousel.Item>
//                     <img
//                       className="carouselAnimal"
//                       id="fotoCarousel"
//                       src={dogcard}
//                       alt="Third slide"
//                     />

//                     <Carousel.Caption>
//                       <h3>3 slide label</h3>
//                       <p>
//                         Praesent commodo cursus magna, vel scelerisque nisl
//                         consectetur.
//                       </p>
//                     </Carousel.Caption>
//                   </Carousel.Item>
//                 </Carousel>
//               </div>
//               <div className="areaInputs">
//                   <form className="formularioInteiro">
//                     <label htmlFor="email"></label>
//                     <input type="text" name="email" placeholder="Nome do animal" />
//                     <label htmlFor="email"></label>
//                     <input type="text" name="email" placeholder="Atende Por"/>
//                     <label htmlFor="email"></label>
//                     <input type="text" name="email" placeholder="Foi visto por último em"/>
//                     <label htmlFor="cor"></label>
//                     <input type="text" name="cor" placeholder="Cor" />
//                     <label htmlFor="descricao"></label>
//                     <input type="text" id="textoDescricao" name="descricao" placeholder="Como o animal estava no dia em que fugiu? Ex: estava tosado, usava coleira, estava de roupinha azul..."/>
//                   </form>
//                 </div>
//               </div>
//             </div>
 
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }
