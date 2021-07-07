import React, { Component } from "react";
import Form from "./pages/Form/Form";
import Results from "./pages/Results/Results";
import API from "../utils/API";

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

    handleSave = id => {
        let book = this.state.bookList.find((book) => book.id === id);
        // CHECK FOR IF BOOK ALREADY EXISTS TOO
        console.log({
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.previewLink
        })
        API.saveBook({ 
            id: book.id,
            title: book.volumeInfo.title,
            authors: JSON.stringify(book.volumeInfo.authors),
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.previewLink
        })
            .then(res => {
                console.log("res",res);
                // this.bookSearch()
                // this.setState({ savedList: this.props.savedList.concat([res]) })
            })
            .catch(err => console.log(err.message));
        console.log("book", book)
    }

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
                    handleSave={this.handleSave}
                />
            </section>
        );
    }
}

export default Search;