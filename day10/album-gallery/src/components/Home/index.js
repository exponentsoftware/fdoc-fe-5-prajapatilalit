import React, { Component } from "react";
import Library from "../Library/Library";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="header">
            <h1 className="albums-heading">Welcome to Music Albums</h1>
            <Library />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
