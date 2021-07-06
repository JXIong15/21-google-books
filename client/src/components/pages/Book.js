import React from "react";

function Book(props) {
    console.log(props)
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <button>View</button>
                </a>
                <button>Save</button>
            </div>
            <h4>Written By: {props.authors}</h4>
            <section>
                <img src={props.img} alt={props.title + " thumbnail"}></img>
                <p>{props.desc}</p>
            </section>
        </div>
    );
}

export default Book;