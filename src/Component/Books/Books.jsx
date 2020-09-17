import React from "react";
import axios from "axios";
import { Book } from "../Book/Book";

export class Books extends React.Component {
  componentDidMount = () => {
    this.getBook();
  };
  getBook = () => {
    axios
      .get("http://localhost:9001/book")
      .then((response) => {
        console.log(response.data.books);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <div>
        <Book url="https://image.shutterstock.com/image-photo/holding-small-grammar-book-isolated-600w-244473772.jpg" />
        <Book />
        <Book />
      </div>
    );
  }
}
