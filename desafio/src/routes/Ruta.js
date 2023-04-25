import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Products from "../views/Products";
import ProductDetail from "../views/ProductDetail";

function Ruta() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Products />} />
                    <Route exact path="detalle/:idProd" element={<ProductDetail />} />
                </Routes>
            </Router>
        </>
    );
}

export default Ruta;