import React from "react";
import "./Book.css";

// class Book extends Component {
function Book(props) {
    // console.log(props.btn)
    // console.log(props._id)
    return (
        <div className="book">
            <div className="head">
                <h4><a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></h4>
                <button className="save" onClick={() => props.btn(props._id)}>{props.btnLabel}</button>

            </div>
            <h5>Written By: {props.authors ? 
                props.authors.replace(/"/g, '').replace(']', '').slice(1).replace(',', ', ') 
                : "No author"}</h5>
            <section>
                <img src={props.image} alt={props.title + " thumbnail"}></img>
                <p>{props.description ? props.description : "No synopsis."}</p>
            </section>
        </div>
    );
}

export default Book;