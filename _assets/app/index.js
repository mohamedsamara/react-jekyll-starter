import React from "react";
import { render } from "react-dom";

import "../styles/main.scss";

class App extends React.Component {
  componentDidMount() {
    console.log("mounted");
  }

  render() {
    return <div>Hello React!</div>;
  }
}

render(<App />, document.querySelector("#root"));
