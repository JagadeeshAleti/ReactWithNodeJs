import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./styles.css";

export class BookView extends React.Component {
  state = {
    book: {},
  };
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const bookId = this.props.match.params.id;
    this.getBookView(bookId, token);
  };

  getBookView = (bookId, token) => {
    axios
      .get("http://localhost:9001/book/" + bookId, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          book: response.data,
        });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.props.history.push("/log-out");
        }
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
    const token = localStorage.getItem("token");
    axios
      .delete("http://localhost:9001/book/" + bookId, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.props.history.push("/books");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.props.history.push("/log-out");
        }
      });
  };

  checkoutBook = () => {
    const bookId = this.state.book._id;
    const token = localStorage.getItem("token");
    axios
      .put(
        `http://localhost:9001/book/${bookId}/checkout/5f1fa67cac44670d6490ce51`,
        undefined,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        this.setState({
          book: response.data.book,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  returnBook = () => {
    const bookId = this.state.book._id;
    const token = localStorage.getItem("token");
    axios
      .put(
        `http://localhost:9001/book/${bookId}/return/5f1fa67cac44670d6490ce51`,
        undefined,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        this.setState({
          book: response.data.book,
        });
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
          {this.state.book.status === "AVAILABLE" ? (
            <button className="checkout" onClick={this.checkoutBook}>
              Checkout
            </button>
          ) : (
            <button className="return" onClick={this.returnBook}>
              Return
            </button>
          )}
          <button onClick={this.deleteBook} className="delete">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(BookView);
