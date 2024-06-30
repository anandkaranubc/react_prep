import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Cart
          </a>
          </div>
      </nav>
    );
  }
}

export default Navbar;
