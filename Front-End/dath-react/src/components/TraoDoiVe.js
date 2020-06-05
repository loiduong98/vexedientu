import React, { Component } from "react";
import Axios from "axios";

export default class TraoDoiVe extends Component {
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
  componentDidMount() {
    this.getDataAPI();
  }
  renderVeDoi = () => {};
  render() {
    return (
      <section id="trade" style={{ marginTop: 100 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src="https://hyundaibinhtrieu.com/wp-content/uploads/2019/09/Mclaren-720s-dau-xe.jpg"
                      alt
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="card-title">
                      Thành Phố Hồ Chí Minh - Đà Lạt
                    </h4>
                    <p className="category">
                      <i className="fa fa-usd" />{" "}
                      <span>
                        Giá bán:{" "}
                        <strong style={{ fontWeight: "bold" }}>
                          200.000 đ
                        </strong>
                      </span>
                    </p>
                    <p className="category">
                      <i className="fa fa-map-marker" />{" "}
                      <span>
                        Ngày đi:{" "}
                        <strong style={{ fontWeight: "bold" }}>
                          22/05/2020
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
              </div>
              {/* end card item */}
            </div>
            {/* end col 8 */}
            <div className="col-md-4">
              <div className="row">
                <div className="card">
                  <div className="card-header card-header-danger">
                    <h4 className="card-title">Danh mục chính</h4>
                  </div>
                  <div className="card-body">
                    <ul className="listCard">
                      <li className="itemCard">
                        <a href="#">Vé xe đi Đà Lạt</a>
                      </li>
                      <li className="itemCard">
                        <a href="#">Vé xe đi Đà Lạt</a>
                      </li>
                      <li className="itemCard">
                        <a href="#">Vé xe đi Đà Lạt</a>
                      </li>
                      <li className="itemCard">
                        <a href="#">Vé xe đi Đà Lạt</a>
                      </li>
                      <li className="itemCard">
                        <a href="#">Vé xe đi Đà Lạt</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card">
                  <div className="card-header card-header-danger">
                    <h4 className="card-title">Xem nhiều nhất</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          src="https://hyundaibinhtrieu.com/wp-content/uploads/2019/09/Mclaren-720s-dau-xe.jpg"
                          alt
                          className="img-fluid rounded imgRounded"
                        />
                      </div>
                      <div className="col-md-9">
                        <h4 className="card-title">
                          Thành Phố Hồ Chí Minh - Đà Lạt
                        </h4>
                        <p className="category">
                          <i className="fa fa-usd" />
                          <span>
                            Giá bán:
                            <strong style={{ fontWeight: "bold" }}>
                              200.000 đ
                            </strong>
                          </span>
                        </p>
                        <p className="category">
                          <i className="fa fa-map-marker" />
                          <span>
                            Ngày đi:
                            <strong style={{ fontWeight: "bold" }}>
                              22/05/2020
                            </strong>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          src="https://hyundaibinhtrieu.com/wp-content/uploads/2019/09/Mclaren-720s-dau-xe.jpg"
                          alt
                          className="img-fluid rounded imgRounded"
                        />
                      </div>
                      <div className="col-md-9">
                        <h4 className="card-title">
                          Thành Phố Hồ Chí Minh - Đà Lạt
                        </h4>
                        <p className="category">
                          <i className="fa fa-usd" />
                          <span>
                            Giá bán:
                            <strong style={{ fontWeight: "bold" }}>
                              200.000 đ
                            </strong>
                          </span>
                        </p>
                        <p className="category">
                          <i className="fa fa-map-marker" />
                          <span>
                            Ngày đi:
                            <strong style={{ fontWeight: "bold" }}>
                              22/05/2020
                            </strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end col 4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
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
                  Thành phố Hồ Chí Minh - Đà Lạt
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
                              Trần Thành Công
                            </strong>
                          </span>
                        </p>
                        <p className="category">
                          <i className="fa fa-clock-o" />{" "}
                          <span>
                            Lúc:{" "}
                            <strong style={{ fontWeight: "bold" }}>
                              17 giờ 22/05/2020
                            </strong>
                          </span>
                        </p>
                        <p className="category">
                          <i className="fa fa-calendar" />{" "}
                          <span>
                            Ngày đi:{" "}
                            <strong style={{ fontWeight: "bold" }}>
                              22/05/2020
                            </strong>
                          </span>
                        </p>
                        <div className="btn btn-block btn-info">
                          <i className="fa fa-phone" /> 0948 757 369
                        </div>
                        <div className="btn btn-block btn-success text-lowercase">
                          <i className="fa fa-envelope" /> congcc97@gmail.com
                        </div>
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
      </section>
    );
  }
}
