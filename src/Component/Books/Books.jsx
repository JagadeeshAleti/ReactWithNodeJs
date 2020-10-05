import React from "react";
import axios from "axios";
import { Book } from "../Book/Book";
import { Link } from "react-router-dom";
export class Books extends React.Component {
  state = {
    books: {
      books: [],
    },
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    this.getBook(token);
  };

  getBook = (token) => {
    axios
      .get("http://localhost:9001/book", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.setState({
          books: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  showBooks = () => {
    const books = this.state.books.books.map((book, index) => {
      return (
        <Link key={"book" + index} to={"/book/" + book._id}>
          <Book name={book.name} author={book.author} status={book.status} />
        </Link>
      );
    });
    return books;
  };

  render() {
    return <div className="books-list">{this.showBooks()}</div>;
  }
}
