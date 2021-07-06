import React, { Component } from "react";
import Form from "./pages/Form";
import Results from "./pages/Results";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        bookList: []
    };

    componentDidMount() {
        this.bookSearch();
    }

    createBook = bookInfo => {
        // return {
            
        // }
    }

    bookSearch = query => {
        API.getBooks(query)
            .then(res => this.setState({bookList: res.data}))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        this.setState({ search: value })

    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        this.bookSearch(this.state.search);
    };


    render() {
        console.log(this.state.bookList)
        return (
            <section>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Results />
            </section>
        );
    }
}

export default Search;