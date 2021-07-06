import React from "react";


function Form(props) {
        return (
            <div className="search-form">
                <h3>Book Search</h3>
                <input
                    value={props.search}
                    type="text"
                    placeholder="Search for Book"
                    onChange={props.handleInputChange}
                />
                <button onClick={props.handleFormSubmit}>Search</button>
            </div>
        );
}

export default Form;