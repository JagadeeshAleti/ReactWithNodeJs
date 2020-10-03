import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";
import "./styles.css";
export class LogIn extends React.Component {
  state = {};

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    console.log("The token is : " + token);
  };

  setUser = (e) => {
    const name = e.target.value;
    this.setState({
      ...this.state,
      name: name,
    });
  };

  setPassword = (e) => {
    const password = e.target.value;
    this.setState({
      ...this.state,
      password: password,
    });
  };

  login = () => {
    const user = {
      name: this.state.name,
      password: this.state.password,
    };

    axios
      .post("http://localhost:9001/auth/logIn", user)
      .then((response) => {
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleFormSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="log-in">
        <h1>LogIn to our Store</h1>
        <input placeholder="User Name" onChange={this.setUser} />
        <input placeholder="Password" onChange={this.setPassword} />
        <button type="submit" onClick={this.login}>
          Submit
        </button>
      </div>
    );
  }
}
