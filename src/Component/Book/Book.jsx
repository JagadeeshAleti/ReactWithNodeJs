import React from "react";
import "./styles.css";
export class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <img className="book_image" src={this.props.url} alt="book" />
      </div>
    );
  }
}
