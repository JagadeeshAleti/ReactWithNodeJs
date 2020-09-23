import React from "react";
import "./styles.css";
export class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1 className="message">Welcome To Our Store</h1>
        <img
          className="image"
          alt="book"
          src="https://i.pinimg.com/236x/52/40/a8/5240a8ff60a9f91a07f9579f348fec3f--so-true-book-nerd.jpg"
        />
      </div>
    );
  }
}
