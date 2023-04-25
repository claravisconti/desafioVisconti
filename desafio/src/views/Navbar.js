
import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


function Navbar() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </Router>
    );
}

export default Navbar;