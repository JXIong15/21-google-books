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
        // console.log(this.state.bookList)
console.log("save")
console.log(id)


        // MAKE SURE IT ACCOUNTS FOR ALREADY SAVED BOOKS
        // if (this.state.savedList.includes(book._id)) {
        //     alert("Book already exists in Saved Books.")
        // }
        // else {
        // this.setState({savedList: this.state.savedList.concat(book)});
        // API.saveBook(book)
        //     .then(res => {
        //         this.setState({ savedList: this.props.savedList.concat([res]) })
        //         console.log("res", res)
        //     })
        //     .catch(err => console.log(err));
        // // }
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