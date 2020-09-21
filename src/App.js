import React from "react";
import { CustomRouter } from "./CustomRouter";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.css";
function App() {
  return (
    <div className="App">
      <Router>
        <CustomRouter />
      </Router>
    </div>
  );
}

export default App;
