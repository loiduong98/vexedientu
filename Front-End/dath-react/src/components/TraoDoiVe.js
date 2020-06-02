import React, { Component } from "react";

export default class TraoDoiVe extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-lg navbar-white"
          color-on-scroll={100}
          id="sectionsNav"
        >
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href="./index.html">
                Vé xe Online
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="material-icons">apps</i> Giới thiệu
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="material-icons">view_day</i> Liên hệ
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./login.html" className="nav-link">
                    <i className="material-icons">view_carousel</i> Đăng nhập
                  </a>
                </li>
                <li className="button-container nav-item">
                  <a
                    href="./dangky.html"
                    target="_blank"
                    className="btn btn-rose btn-round btn-block"
                  >
                    <i className="material-icons">how_to_reg</i> Đăng ký
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* start secton search */}
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
              <div className="col-md-4" />
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
                            <i className="fa fa-user" />
                            <span>
                              Đăng bởi:
                              <strong style={{ fontWeight: "bold" }}>
                                Trần Thành Công
                              </strong>
                            </span>
                          </p>
                          <p className="category">
                            <i className="fa fa-clock-o" />
                            <span>
                              Lúc:
                              <strong style={{ fontWeight: "bold" }}>
                                17 giờ 22/05/2020
                              </strong>
                            </span>
                          </p>
                          <p className="category">
                            <i className="fa fa-calendar" />
                            <span>
                              Ngày đi:
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
        {/* end section search */}
        {/*     *********    END PROJECTS 1      *********      */}
        <footer className="footer footer-black footer-big">
          <div className="container">
            <div className="content">
              <div className="row">
                <div className="col-md-4">
                  <h5>Công ty cổ phần Vé Xe Online</h5>
                  <p>Trụ sở: 475A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM</p>
                  <p>
                    Cơ sở Ung Văn Khiêm: 31/36 Ung Văn Khiêm, P.25, Q.Bình
                    Thạnh, TP.HCM
                  </p>
                  <p>ĐT: (028) 5445 7777 - Fax: (028) 5445 4444</p>
                  <p>Email: hutech@hutech.edu.vn</p>
                </div>
                <div className="col-md-4">
                  <h5>Bản đồ</h5>
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1uMtv-l9SvwpUDlr0EcGG6h9vtSA"
                    width="100%"
                    height="auto"
                  />
                </div>
                <div className="col-md-4">
                  <h5>Instagram Feed</h5>
                  <div className="gallery-feed">
                    <img
                      src="./assets/img/faces/card-profile6-square.jpg"
                      className="img img-raised rounded"
                      alt
                    />
                    <img
                      src="./assets/img/faces/christian.jpg"
                      className="img img-raised rounded"
                      alt
                    />
                    <img
                      src="./assets/img/faces/card-profile4-square.jpg"
                      className="img img-raised rounded"
                      alt
                    />
                    <img
                      src="./assets/img/faces/card-profile1-square.jpg"
                      className="img img-raised rounded"
                      alt
                    />
                    <img
                      src="./assets/img/faces/marc.jpg"
                      className="img img-raised rounded"
                      alt
                    />
                    <img
                      src="./assets/img/faces/kendall.jpg"
                      className="img img-raised rounded"
                      alt
                    />
                    <img
                      src="./assets/img/faces/card-profile5-square.jpg"
                      className="img img-raised rounded"
                      alt
                    />
                    <img
                      src="./assets/img/faces/card-profile2-square.jpg"
                      className="img img-raised rounded"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <ul className="float-left">
              <li>
                <a href="#pablo">Giới thiệu</a>
              </li>
              <li>
                <a href="#pablo">Tin tức</a>
              </li>
              <li>
                <a href="#pablo">Tuyển dụng</a>
              </li>
              <li>
                <a href="#pablo">Liên hệ</a>
              </li>
            </ul>
            <div className="copyright float-right">
              Copyright © Bản quyền thuộc về Vé Xe Online.
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
