import React from "react";
import Book from "../Book/Book";
import "./Results.css"

function Results(props) {
    let resList = Object.values(props.resultsList);
    return (
        <div className="search-res">
            <h4>Results</h4>
            <p>Click on the title to view a preview of the book.</p>
                {resList.map((book) => {
                    return (
                        <Book
                            key={book._id}
                            _id={book._id}
                            title={book.title}
                            authors={book.authors}
                            description={book.description}
                            image={book.image}
                            link={book.link}
                            handleSave={() => props.handleSave(book.id)}
                            handleDelete={() => props.handleDelete(book.id)}
                        />
                    )
                })}
        </div>
    );
}

export default Results;