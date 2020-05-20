import React, { Component } from "react";
import { Form, Formik, Field } from "formik";

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
