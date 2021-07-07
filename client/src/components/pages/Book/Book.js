import React from "react";
import "./Book.css";

// class Book extends Component {
function Book(props) {
    // let authors = JSON.parse(props.authors);
    console.log(props.authors)
    return (
        <div className="book">
            <div className="head">
                <h4><a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></h4>
                <button className="save" onClick={() => props.handleSave(props._id)}>Save</button>

            </div>
            <h5>Written By: {props.authors ? props.authors : "No author."}</h5>
            <section>
                <img src={props.image} alt={props.title + " thumbnail"}></img>
                <p>{props.description ? props.description : "No synopsis."}</p>
            </section>
        </div>
    );
}

export default Book;