import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import swal from "sweetalert";

class TraoDoiVe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idVeBan: "",
    };
  }
  getDataAPI() {
    Axios.all([
      Axios.get("http://localhost:8000/api/login"),
      Axios.get("http://localhost:8000/api/tuyen"),
      Axios.get("http://localhost:8000/api/news"),
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
  

  renderVeDoi() {
    return this.props.dsVeBanData.map((veBan, index) => {
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
                    {veBan.Gia} VND
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
                  <h3 className="modal-title card-title">{veBan.TieuDe}</h3>
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
                                {veBan.HoTen}
                              </strong>
                            </span>
                          </p>
                          <p className="category">
                            <i className="fa fa-clock-o" />{" "}
                            <span>
                              Lúc:{" "}
                              <strong style={{ fontWeight: "bold" }}>
                                {veBan.GioKhoiHanh}
                              </strong>
                            </span>
                          </p>
                          <p className="category">
                            <i className="fa fa-calendar" />{" "}
                            <span>
                              Ngày đi:{" "}
                              <strong style={{ fontWeight: "bold" }}>
                                {veBan.NgayKhoiHanh.substr(0, 10)}
                              </strong>
                            </span>
                          </p>
                          <div className="btn btn-block btn-info">
                            <i className="fa fa-phone" /> {veBan.SDT}
                          </div>
                          <div className="btn btn-block btn-success text-lowercase">
                            <i className="fa fa-envelope" /> {veBan.Email}
                          </div>
                          <button className="btn btn-success">Đổi vé</button>
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
    return (
      <section id="trade" style={{ marginTop: 100 }}>
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
