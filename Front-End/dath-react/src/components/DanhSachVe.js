import React, { Component, version } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import swal from "sweetalert";

class DanhSachVe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      tenLC: "",
      gia: "",
    };
  }
  idKhachHang = localStorage.getItem("idKH");

  getDataAPI() {
    Axios.all([
      Axios.get("/api/login"),
      Axios.get("/api/khachhang"),
      Axios.get("/api/ve"),
      Axios.get("/api/lichchay"),
      Axios.get("/api/TicketUser/" + this.idKhachHang),
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
        this.props.dispatch({
          type: "FETCH_TICKETUSER",
          payload: resArr[4].data,
        });
        // console.log(this.idKhachHang);
        console.log(this.props.ticketUserData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getTTVeBan(x, y, z) {
    return this.setState({ id: x.toString(), TenLC: y, Gia: z });
  }

  _handleSubmit = (values) => {
    values.idVe = this.state.id;
    values.TieuDe = this.state.TenLC;
    values.Gia = this.state.Gia;
    var postData = values;
    this.getDataAPI();

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
  update(x) {
    const employee = {
      idVe: this.state.id,
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    Axios.put("/api/tradeticket/" + x, employee, axiosConfig).then((res) => {
      console.log(res.data);
      this.getDataAPI();
      swal({
        title: "Tuyệt vời!",
        text: "Bạn đã đổi vé thành công!",
        icon: "success",
      });
    });
  }
  delete(x) {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    Axios.delete("/api/news/" + x, axiosConfig).then((res) => {
      console.log(res.data);
      this.getDataAPI();
    });
  }

  componentDidMount() {
    this.getDataAPI();
  }
  renderDSVE() {
    return this.props.ticketUserData.map((ticket, index) => {
      return (
        <tr key={index}>
          <td>{ticket.id}</td>
          <td>{(ticket.NgayDatVe).substr(0,10)}</td>
          <td>{ticket.TenLC}</td>
          <td>{(ticket.NgayKhoiHanh).substr(0,10)}</td>
          <td>{ticket.GioKhoiHanh}</td>
          <td>
            {ticket.TrangThai == 0 ? (
              <button
                className="btn btn-success"
                data-toggle="modal"
                data-target="#modelId"
                onClick={() =>
                  this.getTTVeBan(ticket.id, ticket.TenLC, ticket.Gia)
                }
              >
                Đăng vé
              </button>
            ) : ticket.TrangThai == 1 ? (
              <div>
                <button
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#modelId"
                  onClick={() =>
                    this.getTTVeBan(ticket.id, ticket.TenLC, ticket.Gia)
                  }
                  disabled
                >
                  Đang trao đổi
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => this.delete(ticket.id)}
                >
                  Hủy
                </button>
              </div>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => this.update(ticket.id)}
              >
                Xác nhận
              </button>
            )}
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
                      idVe: this.state.id,
                      TieuDe: this.state.TenLC,
                      Gia: this.state.Gia,
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
                            value={this.state.id}
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
                            value={this.state.TenLC}
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
                            value={this.state.Gia}
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
                <th>Trạng thái</th>
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
    ticketUserData: state.ticketUserReducer.ticketUserData,
  };
};

export default connect(mapStateToProps)(DanhSachVe);
