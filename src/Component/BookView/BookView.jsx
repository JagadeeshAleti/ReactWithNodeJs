import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import "./styles.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export class BookView extends React.Component {
  state = {
    book: {},
  };
  componentDidMount = () => {
    const bookId = this.props.match.params.id;
    this.getBookView(bookId);
  };

  getBookView = (bookId) => {
    axios
      .get("http://localhost:9001/book/" + bookId)
      .then((response) => {
        this.setState({
          book: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  bookAttribute = (title, key) => {
    const value = this.state.book[key];
    return (
      <div className="attribute">
        <h4>{title}</h4>
        <h4>{value}</h4>
      </div>
    );
  };

  deleteBook = () => {
    const bookId = this.props.match.params.id;
    axios
      .delete("http://localhost:9001/book/" + bookId)
      .then((response) => {
        //navigate to other page
        this.props.history.push("/books");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const bookId = this.props.match.params.id;
    return (
      <div>
        <div className="book-view">
          {this.bookAttribute("Book", "name")}
          {this.bookAttribute("Author", "author")}
          {this.bookAttribute("Status", "status")}
          {this.bookAttribute("Updated At", "updatedAt")}
        </div>
        <div className="edit-delete">
          <Link to={"/edit-book/" + bookId} className="edit">
            Edit
          </Link>
          <button onClick={this.deleteBook} className="delete">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(BookView);
