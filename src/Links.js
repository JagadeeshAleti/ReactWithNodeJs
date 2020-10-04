import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export function Links() {
  return (
    <div className="links">
      <Link to="/">LogIn</Link>
      <Link to="/home">Home</Link>
      <Link to="/create-book">Create Book</Link>
      <Link to="/books">Books</Link>
      <Link to="/log-out">LogOut</Link>
    </div>
  );
}
