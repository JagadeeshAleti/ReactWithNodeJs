import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
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
  render() {
    console.log(this.state.book);
    return (
      <div>
        <div>
          <h4>Book</h4>
          <h4>{this.state.book.name}</h4>
        </div>

        <div>
          <h4>Author</h4>
          <h4>{this.state.book.author}</h4>
        </div>

        <div>
          <h4>Status</h4>
          <h4>{this.state.book.status}</h4>
        </div>

        <div>
          <h4>Updated At</h4>
          <h4>{this.state.book.updatedAt}</h4>
        </div>
      </div>
    );
  }
}

export default withRouter(BookView);
