import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import DieuHuongURL from "./router/DieuHuongURL";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav></Nav>
          <DieuHuongURL></DieuHuongURL>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}
export default App;
