import React from "react";
import "./Form.css";

function Form(props) {
    return (
        <div className="search-form">
            <h3>Book Search</h3>
            <form>
                <input
                    value={props.search}
                    type="text"
                    placeholder="Search for Book"
                    onChange={props.handleInputChange}
                />
                <button onClick={props.handleFormSubmit}>Search</button>
            </form>
        </div>
    );
}

export default Form;