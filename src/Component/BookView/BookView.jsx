import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import "./styles.css";
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

  render() {
    console.log(this.state.book);
    return (
      <div className="book-view">
        {this.bookAttribute("Book", "name")}
        {this.bookAttribute("Author", "author")}
        {this.bookAttribute("Status", "status")}
        {this.bookAttribute("Updated At", "updatedAt")}
      </div>
    );
  }
}

export default withRouter(BookView);
