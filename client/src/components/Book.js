import React, { Component } from "react";
import API from "../utils/API";

class Book extends Component {
    state = {
        savedList: []
    }

    componentDidMount = () => {
        API.savedBooks()
            .then(res => this.setState({ savedList: res.data }))
            .catch(err => console.log(err));
    }

    handleSave = book => {
        if (this.state.savedList.map(book => book._id).includes(book._id)) {
            alert("Book already exists in Saved Books.")
        }
        else {
            API.saveBook(book)
                .then(res => this.setState({ savedList: this.state.savedList.concat(res) }))
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.title}</h3>
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                        <button>View</button>
                    </a>
                    <button onClick={this.handleSave(this.props)}>Save</button>
                </div>
                <h4>Written By: {this.props.authors}</h4>
                <section>
                    <img src={this.props.img} alt={this.props.title + " thumbnail"}></img>
                    <p>{this.props.desc}</p>
                </section>
            </div>
        );
    }
}

export default Book;