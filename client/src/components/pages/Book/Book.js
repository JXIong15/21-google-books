import React from "react";
import "./Book.css";

// class Book extends Component {
function Book(props) {
    return (
        <div className="book">
            <div className="head">
                <h4><a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></h4>
                <button className="save" onClick={props.handleSave(props.id)}>Save</button>

            </div>
            <h5>Written By: {props.authors}</h5>
            <section>
                <img src={props.img} alt={props.title + " thumbnail"}></img>
                <p>{props.desc ? props.desc : "No synopsis."}</p>
            </section>
        </div>
    );
}

export default Book;