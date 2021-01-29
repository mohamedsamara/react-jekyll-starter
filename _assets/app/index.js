import React from "react";
import { render } from "react-dom";

import "../styles/main.scss";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return <div className="container">Hello React!</div>;
  }
}

render(<App />, document.querySelector("#root"));
