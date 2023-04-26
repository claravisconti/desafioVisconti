import { useState, useEffect } from 'react';
import Banner from '../components/Banner'
import Tarjeta from '../components/Card'
import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Navbar from '../components/Navbar'

function Products(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return
        <Container className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    } else {
        return (
            <div>
                <Navbar />
                <Banner />
                <Container >
                    <Row Row xs={2} md={4} lg={4}>
                        {items.map(item => (
                            <Col key={item.id}>
                                <Tarjeta Id={item.id} Img={item.image} Titulo={item.title} Precio={item.price} />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Products;