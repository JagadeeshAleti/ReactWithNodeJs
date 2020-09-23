import React from "react";
import { Links } from "./Links";
import { Home } from "./Component/Home/Home";
import { Header } from "./Component/Header/Header";
import { Books } from "./Component/Books/Books";
import { CreateBook } from "./Component/CreateBook/CreateBook";
import BookView from "./Component/BookView/BookView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EditBook } from "./EditBook/EditBook";

export function CustomRouter() {
  return (
    <div>
      <Router>
        <Header />
        <Links />
        <Switch>
          <Route path="/create-book" component={CreateBook}></Route>
          <Route path="/book/:id" component={BookView}></Route>
          <Route path="/books" component={Books}></Route>
          <Route path="/edit-book/:id" component={EditBook}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}
