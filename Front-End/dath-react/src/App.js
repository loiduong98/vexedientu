import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import DieuHuongURL from "./router/DieuHuongURL";
import { BrowserRouter as Router } from "react-router-dom";
import {connect} from "react-redux";
import createAction from "./redux/Actions";
import { FETCH_CREDENTIALS } from "./redux/Actions/type";

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
    this._getCredentialFromLocal();
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
          <Nav></Nav>
          <DieuHuongURL></DieuHuongURL>
          <Footer></Footer>
        </div>
      </Router>
    );
  }

  _getCredentialFromLocal = () => {
    const credentialsStr = localStorage.getItem('credentials');
    if (credentialsStr){
      this.props.dispatch(createAction(FETCH_CREDENTIALS, JSON.parse(credentialsStr)))
    }
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
export default connect() (App);
