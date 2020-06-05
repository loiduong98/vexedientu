import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import swal from "sweetalert";

class DanhSachVe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idKH1:'',
      idLC1:'',
      giaLC:'',
      idVe1:'',
      idveban:''
    };
  }

  getDataAPI() {
    Axios.all([
      Axios.get("http://localhost:8000/api/login"),
      Axios.get("http://localhost:8000/api/khachhang"),
      Axios.get("http://localhost:8000/api/ve"),
      Axios.get("http://localhost:8000/api/lichchay"),
    ])
      .then((resArr) => {
        // đẩy dữ liệu danh sách lịch chạy từ API get được vào reducer
        this.props.dispatch({
          type: "FETCH_DSKHACHHANG",
          payload: resArr[0].data,
        });
        this.props.dispatch({
          type: "FETCH_KHACHHANG",
          payload: resArr[1].data,
        });
        this.props.dispatch({
          type: "FETCH_DSVE",
          payload: resArr[2].data,
        });
        this.props.dispatch({
          type: "FETCH_DSLICHCHAY",
          payload: resArr[3].data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  
  _handleSubmit = (values) => {
    values.idVe = this.state.idveban;
    values.TieuDe = this.state.idLC1;
    values.Gia = this.state.giaLC;
    var postData = values;

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    Axios.post("/api/news", postData, axiosConfig)
      .then((res) => {
        swal({
          title: "Tuyệt vời!",
          text: "Bạn đã đăng vé thành công!",
          icon: "success",
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(values);
  };
  getIDveban(x) {
    return this.setState({ idveban: x.toString() });
  }
  renderDSVE() {
    var emailKH = localStorage.getItem("email");
    this.props.khachhangData
      .filter((kh) => {
        return kh.Email === emailKH;
      })
      .map((vlKH) => {
        return (this.state.idKH1 = vlKH.id);
      });
    return this.props.dsVeData
      .filter((ve) => {
        return ve.idKH === this.state.idKH1;
      })
      .map((ve, index) => {
        this.state.idVe1 = ve.id;
        this.props.dsLichChayData
          .filter((lc) => {
            return lc.id === ve.idLC;
          })
          .map((vlLC) => {
            return (this.state.idLC1 = vlLC.TenLC), (this.state.giaLC = vlLC.Gia);
          });
        return (
          <tr key={index}>
            <td scope="row">{ve.id}</td>
            <td>{ve.NgayDatVe}</td>
            <td>{this.state.idLC1}</td>
            <td>{ve.NgayKhoiHanh}</td>
            <td>{ve.GioKhoiHanh}</td>
            <td>
              <button
                className="btn btn-success"
                data-toggle="modal"
                data-target="#modelId"
                onClick={() => this.getIDveban(ve.id)}
              >
                Đăng vé
              </button>
            </td>
            <div
              className="modal fade"
              id="modelId"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="modelTitleId"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Thông tin vé</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Formik
                      initialValues={{
                        idVe: this.state.idveban,
                        TieuDe: this.state.idLC1,
                        Gia: this.state.giaLC,
                      }}
                      onSubmit={this._handleSubmit}
                      render={(formikProps) => (
                        <Form
                      className="bg-white rounded p-4 text-left"
                      action
                      method
                    >
                      <div className="form-group">
                        <label htmlfor="exampleFormControlSelect2">
                          Chọn vé*
                        </label>
                        <Field
                          type="text"
                          name="idVe"
                          value={this.state.idveban}
                          className="form-control"
                          id="idVeBan"
                          disabled
                          onChange={formikProps.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlfor="exampleFormControlInput1">
                          Tiêu đề*
                        </label>
                        <Field
                          type="text"
                          name="TieuDe"
                          value={this.state.idLC1}
                          className="form-control"
                          id="exampleFormControlInput1"
                          disabled
                          onChange={formikProps.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlfor="exampleFormControlInput1">Giá*</label>
                        <Field
                          type="text"
                          name="Gia"
                          className="form-control"
                          id="exampleFormControlInput1"
                          value={this.state.giaLC}
                          disabled
                          onChange={formikProps.handleChange}
                        />
                      </div>
                      <button className="btn btn-success">Đăng tin</button>
                    </Form>
                      )}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Đóng
                    </button>
                    <button type="button" className="btn btn-primary">
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </tr>
        );
      });
  }

  componentDidMount() {
    this.getDataAPI();
  }
  
  render() {
    if (this.props.loginStatus === false) {
      return <Redirect to="/dang-nhap" />;
    }
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <h3>Danh sách vé</h3>
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ngày đặt vé</th>
                <th>Tuyến</th>
                <th>Ngày khởi hành</th>
                <th>Giờ khởi hành</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.renderDSVE()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginStatus: state.loginReducer,
    khachhangData: state.khachhangReducer.khachhangData,
    dsVeData: state.dsVeReducer.dsVeData,
    dsLichChayData: state.dslichchayReducer.dslichchayData,
  };
};

export default connect(mapStateToProps)(DanhSachVe);
