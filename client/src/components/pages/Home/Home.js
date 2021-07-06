import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <section>
                <h1>(<span>React</span>) Google Books Search</h1>
                <h3><span>Search For</span> and <span>Save</span> Books of Interest</h3>
            </section>

            <Link to="/search" role="button" className="btn btn-link">
                Search for Books
            </Link>
        </div>
    );
}

export default Home;