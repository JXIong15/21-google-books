import React, { Component } from "react";


class Form extends Component {
    state = {
        title: ""
      };

      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        this.setState({ title: value})
          
      };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        let val = this.state.title;
        alert(val)
    };

    render() {
        return (
            <div className="search-form">
                <h3>Book Search</h3>
                <input
                    value={this.state.title}
                    type="text"
                    placeholder="Book Title"
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleFormSubmit}>Search</button>
            </div>
        );
    }
}

export default Form;