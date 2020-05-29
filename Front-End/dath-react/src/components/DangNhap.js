import React, { Component } from "react";
import { Form, Formik, Field } from 'formik';
import {connect} from 'react-redux';
import { login } from "../redux/Actions/user";

class DangNhap extends Component {
  render() {
    return (
      <div className="login-page">
        <div
          className="page-header header-filter"
          style={{
            backgroundImage: "url(./assets/img/bg7.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                <div className="card card-signup">
                  <Formik
                    initialValues={{
                      email: "",
                      password: ""
                    }}
                    onSubmit={(values) => {
                      console.log(values);
        
                      this.props.dispatch(login(values))
                      
                    }}

                    render={({ handleChange }) => (
                      <Form className="form">
                        <div className="card-header card-header-primary text-center">
                          <h4 className="card-title">Đăng nhập</h4>
                          <div className="social-line">
                            <a href="#pablo" className="btn btn-just-icon btn-link">
                              <i className="fa fa-facebook-square" />
                            </a>
                            <a href="#pablo" className="btn btn-just-icon btn-Wlink">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#pablo" className="btn btn-just-icon btn-link">
                              <i className="fa fa-google-plus" />
                            </a>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">face</i>
                            </span>
                            <Field
                              type="text"
                              name="email"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Email..." />
                          </div>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">lock_outline</i>
                            </span>
                            <Field
                              type="password"
                              name="password"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Mật khẩu..." />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-danger">Đăng nhập</button>
                        </div>
                      </Form>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect() (DangNhap);
