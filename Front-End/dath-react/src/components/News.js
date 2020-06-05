import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import * as yup from "yup";
import swal from "sweetalert";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class News extends Component {
  _handleSubmit = (values) => {
    var postData = values;
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    Axios.post("api/news", postData, axiosConfig)
      .then((res) => {
        swal({
          title: "Tuyệt vời!",
          text: "Bạn đã đăng bài thành công!",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(values);
  };
  render() {
    if (this.props.loginStatus === false) {
      return <Redirect to="/dang-nhap" />;
    }
    return (
      <section className="newsForm" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-8">
              <h3>Đăng tin</h3>
              <Formik
                initialValues={{
                  TieuDe: "",
                  NoiDung: "",
                  urlHinh: "",
                  NoiBan: "",
                  Gia: "",
                }}
                onSubmit={this._handleSubmit}
                render={(formikProps) => (
                  <Form
                    className="bg-white rounded p-4 text-left"
                    action
                    method
                  >
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect2">
                        Nơi bán*
                      </label>
                      <Field
                        className="form-control"
                        type="text"
                        name="NoiBan"
                        placeholder="Mời bạn nhập nơi bán"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">Tiêu đề*</label>
                      <Field
                        type="text"
                        name="TieuDe"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Mời bạn nhập tiêu đề"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Mô tả*
                      </label>
                      <Field
                        className="form-control"
                        name="NoiDung"
                        id="exampleFormControlTextarea1"
                        rows={5}
                        component="textarea"
                        placeholder="Mời bạn nhập mô tả"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">Giá*</label>
                      <Field
                        type="text"
                        name="Gia"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Mời bạn nhập giá"
                      />
                    </div>
                    <button className="btn btn-success">Đăng tin</button>
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginStatus: state.loginReducer,
  };
};

export default connect(mapStateToProps)(News);
