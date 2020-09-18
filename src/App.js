import React from "react";
import { Header } from "./Component/Header/Header";
import { Books } from "./Component/Books/Books";
import { BookView } from "./Component/BookView/BookView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/book">
            <BookView />
          </Route>

          <Route path="/">
            <Books />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
