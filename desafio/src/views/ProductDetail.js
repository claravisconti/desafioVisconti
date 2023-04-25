import { useState, useEffect } from 'react';
import {
    useParams
} from "react-router-dom";

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
                    console.log(result.title);
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
                <img src={item.image} width={200}></img>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </>
        );
    }
}

export default ProductDetail;