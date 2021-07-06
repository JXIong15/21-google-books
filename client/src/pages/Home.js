import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <section>
                <h1>(React) Google Books Search</h1>
                <h2>Search for and Save Books of Interest</h2>
            </section>

            <Router>
                <Link to="/Search" role="button" className="btn btn-link">
                   Search for Books
                </Link>
            </Router>
        </div>
    );
}

export default Home;