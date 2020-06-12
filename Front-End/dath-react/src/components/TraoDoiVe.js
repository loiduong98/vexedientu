import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";

class TraoDoiVe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      HoTen: "",
      TenLC: "",
      GioKH: "",
      NgayKH: "",
      Gia: "",
      Email: "",
      SDT: "",
      TrangThai_new:""
    };
  }
  idKhachHang = localStorage.getItem("idKH");
  getDataAPI() {
    Axios.all([
      Axios.get("/api/login"),
      Axios.get("/api/tuyen"),
      Axios.get("/api/news"),
    ])
      .then((resArr) => {
        // đẩy dữ liệu danh sách lịch chạy từ API get được vào reducer

        this.props.dispatch({
          type: "FETCH_DSTUYEN",
          payload: resArr[1].data,
        });
        this.props.dispatch({
          type: "FETCH_DSVEBAN",
          payload: resArr[2].data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  update(x) {
    const employee = {
      idKH_trade: x,
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    Axios.put(
      "/api/news/" + this.state.id_new,
      employee,
      axiosConfig
    ).then((res)=> {
      this.getDataAPI();
      swal({
        title: "Tuyệt vời!",
        text: "Bạn đã yêu cầu đổi vé thành công!",
        icon: "success",
      });
      
    });
  }
  getTTVe(id, HoTen, TieuDe, GioKH, NgayKH, Gia, Email, SDT,TrangThai_new) {
    this.setState({
      id_new: id,
      HoTen: HoTen,
      TieuDe: TieuDe,
      GioKH: GioKH,
      NgayKH: NgayKH,
      Gia: Gia,
      Email: Email,
      SDT: SDT,
      TrangThai_new:TrangThai_new
    });
  }
  renderVeDoi() {
    let dsVeBanData = this.props.dsVeBanData;
    return dsVeBanData.filter((veHien => {
      return veHien.TrangThai_new == 0;
    })).map((veBan, index) => {
       
        return (
          <div className="card">
            <div className="row">
              <div className="col-md-3" key={index}>
                <img
                  src="https://hyundaibinhtrieu.com/wp-content/uploads/2019/09/Mclaren-720s-dau-xe.jpg"
                  alt
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-6">
                <h4 className="card-title">{veBan.TieuDe}</h4>
                <p className="category">
                  <i className="fa fa-usd" />{" "}
                  <span>
                    Giá bán:{" "}
                    <strong style={{ fontWeight: "bold" }}>
                      {parseInt(veBan.Gia).toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </strong>
                  </span>
                </p>
                <p className="category">
                  <i className="fa fa-map-marker" />{" "}
                  <span>
                    Ngày đi:{" "}
                    <strong style={{ fontWeight: "bold" }}>
                      {veBan.NgayKhoiHanh.substr(0, 11)}
                    </strong>
                  </span>
                </p>
              </div>
              <div className="col-md-3 text-center">
                <button
                  className="btn-rose btn"
                  data-toggle="modal"
                  data-target="#ticketDetails"
                  onClick={() =>
                    this.getTTVe(
                      veBan.id_new,
                      veBan.HoTen,
                      veBan.TieuDe,
                      veBan.GioKhoiHanh,
                      veBan.NgayKhoiHanh,
                      veBan.Gia,
                      veBan.Email,
                      veBan.SDT,
                      veBan.TrangThai_new
                    )
                  }
                >
                  Liên hệ
                </button>
              </div>
            </div>
            <div
              className="modal fade bd-example-modal-lg"
              id="ticketDetails"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <h3 className="modal-title card-title">
                      {this.state.TieuDe}
                      {this.state.id_new}
                    </h3>
                  </div>
                  <div className="modal-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-7">
                          <img
                            src="https://hyundaibinhtrieu.com/wp-content/uploads/2019/09/Mclaren-720s-dau-xe.jpg"
                            alt
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="col-md-5">
                          <div className="card">
                            <p className="category">
                              <i className="fa fa-user" />{" "}
                              <span>
                                Đăng bởi:{" "}
                                <strong style={{ fontWeight: "bold" }}>
                                  {this.state.HoTen}
                                </strong>
                              </span>
                            </p>
                            <p className="category">
                              <i className="fa fa-clock-o" />{" "}
                              <span>
                                Lúc:{" "}
                                <strong style={{ fontWeight: "bold" }}>
                                  {this.state.GioKH}
                                </strong>
                              </span>
                            </p>
                            <p className="category">
                              <i className="fa fa-calendar" />{" "}
                              <span>
                                Ngày đi:{" "}
                                <strong style={{ fontWeight: "bold" }}>
                                  {this.state.NgayKH.substr(0, 10)}
                                </strong>
                              </span>
                            </p>
                            <div className="btn btn-block btn-info">
                              <span>
                                <i className="fa fa-phone" /> {this.state.SDT}
                              </span>
                            </div>
                            <div className="btn btn-block btn-success text-lowercase">
                              <i className="fa fa-envelope" /> {this.state.Email}
                            </div>
                            <button
                              className="btn btn-success"
                              onClick={() => this.update(this.idKhachHang)}
                            >
                              Đổi vé
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* end row */}
                    </div>
                    {/* end container */}
                  </div>
                  {/* end modal content */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    });
  }
  componentDidMount() {
    this.getDataAPI();
  }
  renderTuyen() {
    return this.props.dstuyenData.map((tuyen, index) => {
      return (
        <li className="itemCard" key={index}>
          <a href="#">{tuyen.TenTuyen}</a>
        </li>
      );
    });
  }
  renderVeXemNhieu() {
    return this.props.dsVeBanData
      .filter((viewVe) => {
        return viewVe.LuotXem >= 1200;
      })
      .map((vlVe, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-md-4">
              <img
                src="https://hyundaibinhtrieu.com/wp-content/uploads/2019/09/Mclaren-720s-dau-xe.jpg"
                alt
                className="img-fluid rounded imgRounded"
              />
            </div>
            <div className="col-md-8">
              <h4 className="card-title">{vlVe.TieuDe}</h4>
              <p className="category">
                <i className="fa fa-usd" />
                <span>
                  Giá bán:
                  <strong style={{ fontWeight: "bold" }}>{vlVe.Gia}</strong>
                </span>
              </p>
              <p className="category">
                <i className="fa fa-map-marker" />
                <span>
                  Ngày đi:
                  <strong style={{ fontWeight: "bold" }}>
                    {vlVe.NgayKhoiHanh.substr(0, 10)}
                  </strong>
                </span>
              </p>
            </div>
          </div>
        );
      });
  }
  render() {
    if (this.props.loginStatus === false) {
      return <Redirect to="/dang-nhap" />;
    }
    return (
      <section id="trade" style={{ marginTop: 100 }}>
        <h2>Trao đổi vé xe</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-8">{this.renderVeDoi()}</div>
            {/* end col 8 */}
            <div className="col-md-4">
              <div className="row">
                <div className="card">
                  <div className="card-header card-header-danger">
                    <h4 className="card-title">Danh mục chính</h4>
                  </div>
                  <div className="card-body">
                    <ul className="listCard">{this.renderTuyen()}</ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card">
                  <div className="card-header card-header-danger">
                    <h4 className="card-title">Xem nhiều nhất</h4>
                  </div>
                  <div className="card-body">{this.renderVeXemNhieu()}</div>
                </div>
              </div>
            </div>
            {/* end col 4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginReducer,
    dstuyenData: state.dstuyenReducer.dstuyenData,
    dsVeBanData: state.dsVeBanReducer.dsVeBanData,
  };
};
export default connect(mapStateToProps)(TraoDoiVe);
