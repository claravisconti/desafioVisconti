import { useState, useEffect } from 'react';
import {
    useParams
} from "react-router-dom";
import Tarjeta from '../components/Card';
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductDetail() {

    let { idProd } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idProd}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItem(result);
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
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Banner />
                <Container className="p-5">
                    <Row >
                        <Col className="d-flex justify-content-center" >
                            <img src={item.image} className="imgDetailStyle"></img>
                        </Col>
                        <Col className="d-flex align-items-center" >
                            <Card className="card2">
                                <Card.Title className="my-3">{item.title}</Card.Title>
                                <Card.Text className="my-3">{item.description}</Card.Text>
                                <Card.Title className="my-3">${item.price}</Card.Title>
                                <div className="d-flex">
                                    <Button variant="dark" className="w-75">Agregar al carrito</Button>
                                    <Button variant="light" className="w-25"><i class="bi bi-heart-fill"></i></Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </>
        );
    }
}

export default ProductDetail;