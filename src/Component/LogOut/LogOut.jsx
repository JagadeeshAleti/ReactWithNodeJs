import React from "react";
import "./styles.css";
export class LogOut extends React.Component {
  componentDidMount = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  render() {
    return <div></div>;
  }
}
