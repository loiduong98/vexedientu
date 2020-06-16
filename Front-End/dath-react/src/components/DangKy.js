import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import * as yup from "yup";
import swal from "sweetalert";

const UserSchema = yup.object().shape({
  name: yup.string().required("(*) Bạn chưa nhập họ tên"),
  email: yup
    .string()
    .required("(*) Bạn chưa nhập email")
    .email("Không đúng định dạng email"),
  password: yup.string().required("(*) Bạn chưa nhập password"),
  phone: yup.string().required("(*) Bạn chưa nhập số điện thoại"),
  diachi: yup.string().required("(*) Bạn chưa nhập địa chỉ"),
});

class DangKy extends Component {
  _handleSubmit = (values) => {

    var postData = values;
    
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    Axios.post("/api/login", postData, axiosConfig)
      .then((res) => {
        swal({
          title: "Tuyệt vời!",
          text: "Đăng ký tài khoản thành công!",
          icon: "success",
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(values);
  };
  render() {
    return (
      <div className="signup-page">
        <div
          className="page-header header-filter"
          filter-color="purple"
          style={{
            backgroundImage: "url(./assets/img/bg7.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-10 ml-auto mr-auto">
                <div className="card card-signup">
                  <h2 className="card-title text-center">Đăng ký</h2>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-5 ml-auto">
                        <div className="info info-horizontal">
                          <div className="icon icon-rose">
                            <i className="material-icons">timeline</i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">Tra cứu lịch sử</h4>
                            <p className="description">
                              Tra cứu thông tin chi tiết vé xe. Lịch sủ mua vé
                              xe. Xem lại thông tin chi tiết vé.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-primary">
                            <i className="material-icons">code</i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">Hệ thống trao đổi vé</h4>
                            <p className="description">
                              Bạn mua vé nhầm ngày? Bạn có công việc đột xuất
                              nên bị lỡ vé xe đã đặt? Hãy để chúng tôi giúp bạn
                              bán lại.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mr-auto">
                        <Formik
                          initialValues={{
                            name: "",
                            email: "",
                            password: "",
                            level: "3",
                            urlHinh: "",
                          }}
                          validationSchema={UserSchema}
                          onSubmit={this._handleSubmit}
                          render={(formikProps) => (
                            <Form className="form">
                              <div className="form-group">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="material-icons">face</i>
                                  </span>
                                  <Field
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    onChange={formikProps.handleChange}
                                    placeholder="Họ và tên"
                                  />
                                  <ErrorMessage name="name">
                                    {(msg) => (
                                      <div className="alert alert-danger">
                                        {msg}
                                      </div>
                                    )}
                                  </ErrorMessage>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="material-icons">email</i>
                                  </span>
                                  <Field
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    onChange={formikProps.handleChange}
                                    placeholder="Email..."
                                  />
                                  <ErrorMessage name="email">
                                    {(msg) => (
                                      <div className="alert alert-danger">
                                        {msg}
                                      </div>
                                    )}
                                  </ErrorMessage>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="material-icons">
                                      settings_phone
                                    </i>
                                  </span>
                                  <Field
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    onChange={formikProps.handleChange}
                                    placeholder="Số điện thoại"
                                  />
                                  <ErrorMessage name="phone">
                                    {(msg) => (
                                      <div className="alert alert-danger">
                                        {msg}
                                      </div>
                                    )}
                                  </ErrorMessage>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="material-icons">
                                      lock_outline
                                    </i>
                                  </span>
                                  <Field
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    onChange={formikProps.handleChange}
                                    placeholder="Password..."
                                  />
                                  <ErrorMessage name="password">
                                    {(msg) => (
                                      <div className="alert alert-danger">
                                        {msg}
                                      </div>
                                    )}
                                  </ErrorMessage>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="material-icons">home</i>
                                  </span>
                                  <Field
                                    type="text"
                                    name="diachi"
                                    className="form-control"
                                    onChange={formikProps.handleChange}
                                    placeholder="Địa chỉ ..."
                                  />
                                  <ErrorMessage name="diachi">
                                    {(msg) => (
                                      <div className="alert alert-danger">
                                        {msg}
                                      </div>
                                    )}
                                  </ErrorMessage>
                                </div>
                              </div>
                              <div
                                className="form-group"
                                style={{ display: "none" }}
                              >
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="material-icons">image</i>
                                  </span>
                                  <input
                                    type="text" //Không set type="file" được
                                    name="urlHinh"
                                    className="form-control"
                                    onChange={formikProps.handleChange}
                                    placeholder="Url hình..."
                                    defaultValue="./assets/img/user-icon.png"
                                  />
                                </div>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                    defaultChecked
                                  />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                  Tôi đồng ý
                                  <a href="#"> các điều khoản sử dụng</a>.
                                </label>
                              </div>
                              <div className="text-center">
                                <button className="btn btn-danger">
                                  Đăng ký
                                </button>
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
          </div>
        </div>
      </div>
    );
  }
}

export default DangKy;
