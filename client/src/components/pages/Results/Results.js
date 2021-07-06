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
                            key={book.id}
                            id={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            desc={book.volumeInfo.description}
                            img={book.volumeInfo.imageLinks.thumbnail}
                            link={book.volumeInfo.previewLink}
                            handleSave={props.handleSave}
                        />
                    )
                })}
        </div>
    );
}

export default Results;