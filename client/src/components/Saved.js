import React, { Component } from "react";
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



    render() {
        console.log(this.state.savedList)
        return (
            <div>
                <h3>Saved Books</h3>
                
            </div>
        );
    }
}

export default Saved;