import React from "react";
import { Links } from "./Links";
import { Header } from "./Component/Header/Header";
import { Books } from "./Component/Books/Books";
import { CreateBook } from "./Component/CreateBook/CreateBook";
import BookView from "./Component/BookView/BookView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export function CustomRouter() {
  return (
    <div>
      <Router>
        <Header />
        <br />
        <Links />
        <Switch>
          <Route path="/create-book" component={CreateBook}></Route>
          <Route path="/book/:id" component={BookView}></Route>
          <Route path="/books" component={Books}></Route>
        </Switch>
      </Router>
    </div>
  );
}
