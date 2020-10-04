import React from "react";
import "./styles.css";
export class LogOut extends React.Component {
  logOut = () => {
    const confirm = window.confirm("are sure ?");
    if (confirm) {
      localStorage.removeItem("token");
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="log-out">
        <h1>Visit Our Store Again, Bye Bye!!!!!</h1>
        <button onClick={this.logOut}>LogOut</button>
      </div>
    );
  }
}
