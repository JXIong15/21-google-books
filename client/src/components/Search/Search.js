import React, { Component } from "react";
import Form from "../pages/Form/Form";
import Results from "../pages/Results";
import API from "../../utils/API";
import "./Search.css"

class Search extends Component {
    state = {
        search: "",
        bookList: []
    };

    componentDidMount() {
        this.bookSearch();
    }

    // searches for book based on user input
    bookSearch = query => {
        API.getBooks(query)
            .then(res => this.setState({ bookList: res.data.items }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        this.setState({ search: value })
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        this.bookSearch(this.state.search);
    };

    render() {
        return (
            <section>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Results
                    resultsList={this.state.bookList}
                />
            </section>
        );
    }
}

export default Search;