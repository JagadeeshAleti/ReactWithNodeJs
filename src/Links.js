import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export function Links() {
  return (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/create-book">Create Book</Link>
      <Link to="/books">Books</Link>
    </div>
  );
}
