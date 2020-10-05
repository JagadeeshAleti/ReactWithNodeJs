import React from "react";
import axios from "axios";
import "./styles.css";
export class EditBook extends React.Component {
  state = {
    book: {},
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const bookId = this.props.match.params.id;
    this.getBookInfo(bookId, token);
  };
  getBookInfo = (bookId, token) => {
    axios
      .get("http://localhost:9001/book/" + bookId, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.setState({
          book: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  editBookName = (e) => {
    const name = e.target.value;
    this.setState({
      book: {
        ...this.state.book,
        name: name,
      },
    });
  };

  editAuthorName = (e) => {
    const author = e.target.value;
    this.setState({
      book: {
        ...this.state.book,
        author: author,
      },
    });
  };

  editBook = () => {
    const bookId = this.state.book._id;
    const book = this.state.book;
    const token = localStorage.getItem("token");
    const { createdAt, _id, updatedAt, __v, ...restOfBook } = book;

    axios
      .put("http://localhost:9001/book/" + bookId, restOfBook, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        this.props.history.push(`/book/${bookId}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="edit-book">
        <input value={this.state.book.name} onChange={this.editBookName} />
        <input value={this.state.book.author} onChange={this.editAuthorName} />
        <button type="button" onClick={this.editBook}>
          Update
        </button>
      </div>
    );
  }
}
