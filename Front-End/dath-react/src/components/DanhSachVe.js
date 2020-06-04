import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Axios from "axios";

class DanhSachVe extends Component {
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
  idKH1 = "";
  idLC1 = "";
  renderDSVE() {
    var emailKH = localStorage.getItem("email");
    console.log(emailKH);
    this.props.khachhangData
      .filter((kh, index) => {
        return kh.Email === emailKH;
      })
      .map((vlKH, index) => {
        return (this.idKH1 = vlKH.id);
      });
    return this.props.dsVeData
      .filter((ve, index) => {
        return ve.idKH === this.idKH1;
      })
      .map((ve, index) => {
        this.props.dsLichChayData
          .filter((lc, index) => {
            return lc.id === ve.idLC;
          })
          .map((vlLC, index) => {
            return (this.idLC1 = vlLC.TenLC);
          });
        return (
          <tr key={index}>
            <td scope="row">{ve.id}</td>
            <td>{ve.NgayDatVe}</td>
            <td>{this.idLC1}</td>
            <td>{ve.NgayKhoiHanh}</td>
            <td>{ve.GioKhoiHanh}</td>
            <td>
              <button className="btn btn-success">Đăng vé</button>
            </td>
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
