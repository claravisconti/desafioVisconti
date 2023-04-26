
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

function Banner() {
    return (
        <Container>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://http2.mlstatic.com/D_NQ_811148-MLA54968718858_042023-OO.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://http2.mlstatic.com/D_NQ_723308-MLA54968728734_042023-OO.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Banner;