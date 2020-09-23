import React from "react";
import axios from "axios";
import "./styles.css";
export class EditBook extends React.Component {
  state = {};

  // getBookInfo = (bookId) => {
  //   axios
  //     .get("http://localhost:9001/book/" + bookId)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  getPlaceHolder = (bookId) => {
    axios
      .get("http://localhost:9001/book/" + bookId)
      .then((response) => {
        return response.data.id;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const bookId = this.props.match.params.id;

    return (
      <div className="edit-book">
        <input value={this.getPlaceHolder(bookId)} onChange={this.setBook} />
        <input placeholder="Author" onChange={this.setAuthor} />
        <button type="button" onClick={this.createBook}>
          Update
        </button>
      </div>
    );
  }
}
