import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer footer-black footer-big">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-md-4">
                <h5>Công ty cổ phần Vé Xe Online</h5>
                <p>Trụ sở: 475A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM</p>
                <p>
                  Cơ sở Ung Văn Khiêm: 31/36 Ung Văn Khiêm, P.25, Q.Bình Thạnh,
                  TP.HCM
                </p>
                <p>ĐT: (028) 5445 7777 - Fax: (028) 5445 4444</p>
                <p>Email: hutech@hutech.edu.vn</p>
              </div>
              <div className="col-md-4">
                <h5>Bản đồ</h5>
                <iframe
                  title="Bản đồ"
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
                    alt=""
                  />
                  <img
                    src="./assets/img/faces/christian.jpg"
                    className="img img-raised rounded"
                    alt=""
                  />
                  <img
                    src="./assets/img/faces/card-profile4-square.jpg"
                    className="img img-raised rounded"
                    alt=""
                  />
                  <img
                    src="./assets/img/faces/card-profile1-square.jpg"
                    className="img img-raised rounded"
                    alt=""
                  />
                  <img
                    src="./assets/img/faces/marc.jpg"
                    className="img img-raised rounded"
                    alt=""
                  />
                  <img
                    src="./assets/img/faces/kendall.jpg"
                    className="img img-raised rounded"
                    alt=""
                  />
                  <img
                    src="./assets/img/faces/card-profile5-square.jpg"
                    className="img img-raised rounded"
                    alt=""
                  />
                  <img
                    src="./assets/img/faces/card-profile2-square.jpg"
                    className="img img-raised rounded"
                    alt=""
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
            Copyright © {new Date().getFullYear()} Bản quyền thuộc về Vé Xe
            Online.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
