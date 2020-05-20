import React, { Component } from "react";
<<<<<<< HEAD
import { Form, Formik, Field } from "formik";
=======
import { Formik, Form, Field } from 'formik'
import Axios from "axios";
import * as yup from "yup";
>>>>>>> backend-lan

class DangNhap extends Component {
  _handleSubmit = values => {
    Axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/login',
      data: values
    }).then(res => {
      alert('Chúc mừng bạn đã đăng ký thành công <3')

    }).catch(err => {
      console.log(err);
    })
    console.log(values)
  }
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
<<<<<<< HEAD

                  <Formik
                    initialValues={{
                      email: "",
                      password: ""
                    }}

                    onSubmit={(values) => {
                      console.log(values);

                    }}

                    render={({ handleChange }) =>
                      <Form className="form" >
                        <div className="card-header card-header-primary text-center">
                          <h4 className="card-title">Đăng nhập</h4>
                          <div className="social-line">
                            <a href="#pablo" className="btn btn-just-icon btn-link">
                              <i className="fa fa-facebook-square" />
                            </a>
                            <a href="#pablo" className="btn btn-just-icon btn-link">
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
                              name="email"
                              onChange={handleChange}
                              type="text"
                              className="form-control"
                              placeholder="Email..."
                            />
                          </div>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">lock_outline</i>
                            </span>
                            <Field
                              name="password"
                              onChange={handleChange}
                              type="password"
                              className="form-control"
                              placeholder="Mật khẩu..."
                            />
                          </div>
                        </div>
                        <div className="footer text-center">
                          <button href="#pablo" className="btn btn-primary btn-link btn-wd btn-lg">
                            Đăng nhập
                        </button>
                        </div>
                      </Form>
                    }
                  />


=======
                  <Formik
                    initialValues={{
                      email: '',
                      password: ''
                    }}
                    onSubmit={(values) => {
                      {handleSubmit}
                    }}
                    render={({ handleChange }) => (<Form className="form">
                      <div className="card-header card-header-primary text-center">
                        <h4 className="card-title">Đăng nhập</h4>
                        <div className="social-line">
                          <a href="#pablo" className="btn btn-just-icon btn-link">
                            <i className="fa fa-facebook-square" />
                          </a>
                          <a href="#pablo" className="btn btn-just-icon btn-link">
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
                                <button className="btn btn-danger">Đăng nhập</button>
                              </div>
                    </Form>
                    )} />
>>>>>>> backend-lan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DangNhap;
