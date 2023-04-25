import { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";

function Products() {

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
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <div key={item.id}>
                        <Link to={`/detalle/${item.id}`}>
                            <img src={item.image} width={200}></img>
                        </Link>
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                    </div>
                ))}
            </ul>
        );
    }
}

export default Products;