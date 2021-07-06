import React, { Component } from "react";
import API from "../utils/API";
import Results from "./pages/Results/Results";
import SavedBooks from "./pages/SavedBooks"

class Saved extends Component {
    state = {
        savedBooks: []
    }

    


    render() {

        return (
            <div>
                <h3>Saved Books</h3>
                <SavedBooks />
            </div>
        );
    }
}

export default Saved;