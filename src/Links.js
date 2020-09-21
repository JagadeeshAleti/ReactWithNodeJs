import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export function Links() {
  return (
    <div className="links">
      <Link to="/create-book">Create Book</Link>
      <br />
      <Link to="/books">Books</Link>
    </div>
  );
}
