import React from "react";
import { Links } from "./Links";
import { Home } from "./Component/Home/Home";
import { Header } from "./Component/Header/Header";
import { Books } from "./Component/Books/Books";
import { CreateBook } from "./Component/CreateBook/CreateBook";
import BookView from "./Component/BookView/BookView";
import { PrivateRoute } from "./Component/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EditBook } from "./Component/EditBook/EditBook";
import { LogIn } from "./Component/LogIn/LogIn";
import { LogOut } from "./Component/LogOut/LogOut";

export class CustomRouter extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Links />
          <Switch>
            <PrivateRoute
              path="/create-book"
              component={CreateBook}
            ></PrivateRoute>
            <Route path="/book/:id" component={BookView}></Route>
            <PrivateRoute path="/books" component={Books}></PrivateRoute>
            <Route path="/edit-book/:id" component={EditBook}></Route>
            <PrivateRoute path="/home" component={Home}></PrivateRoute>
            <PrivateRoute path="/log-out" component={LogOut}></PrivateRoute>
            <Route path="/" component={LogIn}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
