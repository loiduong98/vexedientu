import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-white"
        color-on-scroll={100}
        id="sectionsNav"
      >
        <div className="container">
          <div className="navbar-translate">
            <Link className="navbar-brand" to="/">
              Vé xe Online
            </Link>
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
                <Link to="/gioi-thieu" className="nav-link">
                  <i className="material-icons">apps</i> Giới thiệu
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/lien-he" className="nav-link">
                  <i className="material-icons">view_day</i> Liên hệ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/trao-doi-ve" className="nav-link">
                  <i className="material-icons">compare_arrows</i> Trao đổi vé
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dang-nhap" className="nav-link">
                  <i className="material-icons">view_carousel</i> Đăng nhập
                </Link>
              </li>
              <li className="button-container nav-item">
                <Link
                  to="/dang-ky"
                  className="btn btn-rose btn-round btn-block"
                >
                  <i className="material-icons">how_to_reg</i> Đăng ký
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
