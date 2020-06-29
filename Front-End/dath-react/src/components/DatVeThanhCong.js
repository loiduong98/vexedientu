import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";

class DatVeThanhCong extends Component {
  getDataAPI() {
    Axios.all([Axios.get("/api/TicketUser/")])
      .then((resArr) => {
        // đẩy dữ liệu danh sách lịch chạy từ API get được vào reducer
        this.props.dispatch({
          type: "FETCH_TICKETUSER",
          payload: resArr[0].data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.getDataAPI();
  }
  arrVe = [];
  arrVeFilter;
  renderChiTietVe() {
    for (const ticket of this.props.ticketUserData) {
      this.arrVe.push(ticket.idHD);
    }
    this.idVeNew = Math.max(...this.arrVe);

    // console.log(this.arrVeFilter);
    return this.props.ticketUserData
      .filter((ticket) => ticket.idHD == this.idVeNew)
      .map((tic) => {
        return (
          <div className="card">
                <div className="card-header card-header-danger">
                <h3 className="card-title">Đặt vé thành công</h3>
                  <h4>Thông tin chi tiết vé</h4>
                </div>
                <div className="card-body">
                <table className="table">
            <tbody>
              <tr>
                <td className="titleComplete">Tuyến</td>
                <td>
                  <span style={{ fontWeight: "bold" }}>{tic.TenLC}</span>
                </td>
              </tr>
              <tr>
                <td className="titleComplete">Ngày đi </td>
                <td>
                  <span style={{ fontWeight: "bold" }}>{tic.NgayKhoiHanh}</span>
                </td>
              </tr>
              <tr>
                <td className="titleComplete">Họ Tên </td>
                <td>
                  <span style={{ fontWeight: "bold" }}>{tic.HoTen}</span>
                </td>
              </tr>
              <tr>
                <td className="titleComplete">Số điện thoại </td>
                <td>
                  <span style={{ fontWeight: "bold" }}>{tic.SDT}</span>
                </td>
              </tr>
              <tr>
                <td className="titleComplete">Tổng tiền </td>
                <td>
                  <span style={{ fontWeight: "bold" }}>{tic.Gia} VNĐ</span>
                </td>
              </tr>
              <tr>
                <td className="titleComplete">Mã vé</td>
                <td>
                  <span style={{ fontWeight: "bold" }}>{tic.maVe}</span>
                </td>
              </tr>
            </tbody>
          </table>
                </div>
              </div>
          
        );
      });
  }
  render() {
    return (
      <div style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-6">
              {this.renderChiTietVe()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ticketUserData: state.ticketUserReducer.ticketUserData,
  };
};

export default connect(mapStateToProps)(DatVeThanhCong);
