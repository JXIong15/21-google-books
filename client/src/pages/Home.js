import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <section>
                <h1>(React) Google Books Search</h1>
                <h2>Search for and Save Books of Interest</h2>
            </section>

            <Link to="/search" role="button" className="btn btn-link">
                Search for Books
            </Link>
        </div>
    );
}

export default Home;