import { Carousel } from "react-bootstrap";

export function SliderAnimal(props) {

    return (
        <>
        
                <Carousel.Item id={props.id}>
                    <img
                        className="carouselAnimal"
                        id="fotoCarousel"
                        src={props.avatar}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{props.nome}</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
               
                </>
    )
}

