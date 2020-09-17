import React from "react";
import { Header } from "./Component/Header/Header";
import { Books } from "./Component/Books/Books";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Books />
    </div>
  );
}

export default App;
