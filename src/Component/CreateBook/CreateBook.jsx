import React from "react";
import axios from "axios";
import "./styles.css";

export class CreateBook extends React.Component {
  state = {};

  setBook = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  setAuthor = (event) => {
    this.setState({
      author: event.target.value,
    });
  };

  createBook = () => {
    const book = {
      name: this.state.name,
      author: this.state.author,
    };
    axios
      .post("http://localhost:9001/book", book)
      .then((response) => {
        this.props.history.push("/book/" + response.data._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="create-book">
        <input placeholder="Name" onChange={this.setBook} />
        <input placeholder="Author" onChange={this.setAuthor} />
        <button type="button" onClick={this.createBook}>
          Submit
        </button>
      </div>
    );
  }
}
