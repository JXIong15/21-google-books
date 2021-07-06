import React, { Component } from "react";
import API from "../../utils/API";
import "./Book.css";

class Book extends Component {
    state = {
        savedList: []
    }

    componentDidMount = () => {
        API.savedBooks()
            .then(res => this.setState({ savedList: res }))
            .catch(err => console.log(err));
    }

    handleSave = event => {
        event.preventDefault();
        let book = this.props;
        // MAKE SURE IT ACCOUNTS FOR ALREADY SAVED BOOKS
        // if (this.state.savedList.includes(book._id)) {
        //     alert("Book already exists in Saved Books.")
        // }
        // else {
        // this.setState({savedList: this.state.savedList.concat(book)});
        API.saveBook(book)
            .then(res => {
                this.setState({ savedList: this.state.savedList.concat([res]) })
                console.log("res", res)
            })
            .catch(err => console.log(err));
        // }

        console.log(this.state.savedList)
    }

    render() {
        return (
            <div className="book">
                <div className="head">
                    <h4><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.title}</a></h4>
                    <button className="save" onClick={this.handleSave}>Save</button>

                </div>
                <h5>Written By: {this.props.authors}</h5>
                <section>
                    <img src={this.props.img} alt={this.props.title + " thumbnail"}></img>
                    <p>{this.props.desc ? this.props.desc : "No synopsis."}</p>
                </section>
            </div>
        );
    }
}

export default Book;