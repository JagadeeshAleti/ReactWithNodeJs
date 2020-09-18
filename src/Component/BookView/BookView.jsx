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
    return <div>Book View</div>;
  }
}

export default withRouter(BookView);
