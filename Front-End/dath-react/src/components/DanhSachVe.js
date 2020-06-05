import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Axios from "axios";

class DanhSachVe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  idKH1 = "";
  idLC1 = "";
  giaLC = "";
  idVe1 = "";
  getIDveban(x) {
    return this.setState({ idveban: x }, () => {
      return console.log("id ve ban la" + this.state.idveban);
    });
  }

  renderVe() {
    var emailKH = localStorage.getItem("email");
    this.props.khachhangData
      .filter((kh) => {
        return kh.Email === emailKH;
      })
      .map((vlKH) => {
        return (this.idKH1 = vlKH.id);
      });
    return this.props.dsVeData
      .filter((ve) => {
        return ve.idKH === this.idKH1;
      })
      .map((vlVe, index) => {
        return <option key={index}>{vlVe.id}</option>;
      });
  }
  renderDSVE() {
    var emailKH = localStorage.getItem("email");
    this.props.khachhangData
      .filter((kh) => {
        return kh.Email === emailKH;
      })
      .map((vlKH) => {
        return (this.idKH1 = vlKH.id);
      });
    return this.props.dsVeData
      .filter((ve) => {
        return ve.idKH === this.idKH1;
      })
      .map((ve, index) => {
        this.idVe1 = ve.id;
        this.props.dsLichChayData
          .filter((lc) => {
            return lc.id === ve.idLC;
          })
          .map((vlLC) => {
            return (this.idLC1 = vlLC.TenLC), (this.giaLC = vlLC.Gia);
          });
        return (
          <tr key={index}>
            <td scope="row">{ve.id}</td>
            <td>{ve.NgayDatVe}</td>
            <td>{this.idLC1}</td>
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
              class="modal fade"
              id="modelId"
              tabindex="-1"
              role="dialog"
              aria-labelledby="modelTitleId"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Thông tin vé</h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form
                      className="bg-white rounded p-4 text-left"
                      action
                      method
                    >
                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect2">
                          Chọn vé*
                        </label>
                        <input
                          type="text"
                          name="idVe"
                          value={this.state.idveban}
                          className="form-control"
                          id="exampleFormControlInput1"
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                          Tiêu đề*
                        </label>
                        <input
                          type="text"
                          name="TieuDe"
                          value={this.idLC1}
                          className="form-control"
                          id="exampleFormControlInput1"
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Giá*</label>
                        <input
                          type="text"
                          name="Gia"
                          className="form-control"
                          id="exampleFormControlInput1"
                          value={this.giaLC}
                          disabled
                        />
                      </div>
                      <button className="btn btn-success">Đăng tin</button>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Đóng
                    </button>
                    <button type="button" class="btn btn-primary">
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
      return (
        <Redirect
          to={{
            pathname: "/dang-nhap",
            state: { prevPage: this.props.location.pathname },
          }}
        />
      );
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
