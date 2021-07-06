import axios from "axios";


const genEmpList = {
  genEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  }
}

 export default genEmpList;
 
export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
