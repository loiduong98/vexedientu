import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Field is required!"),
  matKhau: yup.string().required("Field is required!"),
  hoTen: yup.string().required("Field is required!"),
  email: yup.string().required("Field is required!").email("Email is invalid!"),
  soDT: yup.string().required("Field is required!").matches(/^[0-9]+$/)
})

class DangKy extends Component {

  _handleSubmit = (values) => {
   Axios ({
     method: "POST",
     url: "",
     data: values
   }).then(res => {
     console.log(res);
     
   }).catch(err => {
     console.log(err);
     
   })
    
  }

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
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="material-icons">group</i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">Đóng góp ý kiến</h4>
                            <p className="description">
                              Chúng tôi luôn lắng nghe ý kiến của khách hàng để
                              cải thiện chất lượng và dịch vụ tốt hơn.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 mr-auto">

                        <Formik
                          initialValues = {{
                            taiKhoan:'',
                            matKhau:'',
                            hoTen:'',
                            email:'',
                            soDT:''
                          }}
                          validationSchema={signupUserSchema}
                          onSubmit = {this._handleSubmit}
                          render={(formikProps) => (
                            <Form className="form" method action>
                              <div className="form-group">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="material-icons">face</i>
                                  </span>
                                  <Field
                                    name="hoTen"
                                    onChange={formikProps.handleChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Họ và Tên"
                                  />
                                 <ErrorMessage name="hoTen">
                                   {
                                     msg => <div className="alert alert-danger">{msg}</div>
                                   }
                                 </ErrorMessage>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="material-icons">face</i>
                                  </span>
                                  <Field
                                    name="taiKhoan"
                                    onChange={formikProps.handleChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Tài Khoản"
                                  />
                                   <ErrorMessage name="taiKhoan">
                                   {
                                     msg => <div className="alert alert-danger">{msg}</div>
                                   }
                                 </ErrorMessage>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="material-icons">email</i>
                                  </span>
                                  <Field
                                    name="email"
                                    onChange={formikProps.handleChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Email..."
                                  />
                                  <ErrorMessage name="email">
                                   {
                                     msg => <div className="alert alert-danger">{msg}</div>
                                   }
                                 </ErrorMessage>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="material-icons">phone</i>
                                  </span>
                                  <Field
                                    name="soDT"
                                    onChange={formikProps.handleChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Số điện thoại..."
                                  />
                                  <ErrorMessage name="soDT">
                                   {
                                     msg => <div className="alert alert-danger">{msg}</div>
                                   }
                                 </ErrorMessage>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="material-icons">lock_outline</i>
                                  </span>
                                  <Field
                                    name="matKhau"
                                    onChange={formikProps.handleChange}
                                    type="password"
                                    placeholder="Mật khẩu..."
                                    className="form-control"
                                  />
                                    <ErrorMessage name="matKhau">
                                   {
                                     msg => <div className="alert alert-danger">{msg}</div>
                                   }
                                 </ErrorMessage>
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
                             I agree to the
                             <a href="#something">terms and conditions</a>.
                           </label>
                              </div>
                              <div className="text-center">
                                <button
                                  href="#pablo"
                                  className="btn btn-primary btn-round"
                                >
                                  Get Started
                           </button>
                              </div>
                            </Form>
                          )} />
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