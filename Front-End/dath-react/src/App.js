import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import NavUser from "./components/NavUser";
import Footer from "./components/Footer";
import DieuHuongURL from "./router/DieuHuongURL";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  render() {
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for async data, remove this block
      return null; // render null when app is not ready
    }
    return (
      <Router>
        <div className="App">
          {this.props.loginStatus === false ? <Nav></Nav> : <NavUser></NavUser>}
          <DieuHuongURL></DieuHuongURL>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginStatus: state.loginReducer,
  };
};
export default connect(mapStateToProps)(App);
