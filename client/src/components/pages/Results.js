import React from "react";
import Book from "../Book";

function Results(props) {
    let resList = Object.values(props.resultsList);
    return (
        <div className="search-res">
            <h3>Results</h3>
                {resList.map((book) => {
                    return (
                        <Book
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            desc={book.volumeInfo.description}
                            img={book.volumeInfo.imageLinks.thumbnail}
                            link={book.volumeInfo.previewLink}
                        />
                    )
                })}
        </div>
    );
}

export default Results;