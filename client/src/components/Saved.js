import React, { Component } from "react";
import Results from "./pages/Results/Results";
import API from "../utils/API";

class Saved extends Component {
    state = {
        savedList: []
    }

    componentDidMount = () => {
        API.savedBooks()
            .then(res => this.setState({ savedList: res.data }))
            .catch(err => console.log(err));
    }

    handleDelete = id => {
        API.deleteBook(id)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log("saved: ", this.state.savedList)
        console.log(this.state.savedList.length)
        return (
            <div>
                <h3>Saved Books</h3>

                {(this.state.savedList.length > 0) ? (
                    <Results
                        resultsList={this.state.savedList}
                        handleDelete={this.handleDelete}
                    />
                ) : (
                    <h4>No saved books to display.</h4>
                )}
            </div>
        );
    }
}

export default Saved;