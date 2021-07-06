import React from "react";
import Book from "./Book";

function Results(props) {
    // console.log(props.resultsList);
    // console.log(typeof props.resultsList)
    let resList = Object.values(props.resultsList);
    
    // console.log(resList)
    // console.log(typeof resList)
    
        
    // console.log(typeof resList)

    return (
        <div className="search-res">
            <h3>Results</h3>
                {resList.map((book) => {
                    return (
                        <Book
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            link={book.volumeInfo.previewLink}
                        />
                    )
                })}
        </div>
    );
}

export default Results;