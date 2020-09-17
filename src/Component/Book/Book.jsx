import React from "react";
import "./styles.css";
export class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <p>{this.props.name}</p>
        <p>{this.props.author}</p>
        <p>{this.props.status}</p>
      </div>
    );
  }
}
