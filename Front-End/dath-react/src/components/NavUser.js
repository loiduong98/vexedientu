import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavUser extends Component {
  buttonLogOut() {
    this.props.dispatch({
      type: "CHANGE_LOGIN_STATUS",
    });
  }
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
              <li className="dropdown nav-item">
                <Link
                  href="#pablo"
                  className="profile-photo dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="profile-photo-small">
                    <img
                      src="https://professionalsofthefuture.com/wp-content/uploads/2018/12/user-icon.png"
                      alt="Circle avata small"
                      className="rounded-circle img-fluid"
                    />
                  </div>
                </Link>
                <div className="ripple-container" />
                <div className="dropdown-menu dropdown-menu-right">
                  <Link to="#pablo" className="dropdown-item">
                    Thông tin cá nhân
                  </Link>
                  <Link to="#pablo" className="dropdown-item">
                    Lịch sử vé
                  </Link>
                  <Link
                    to=""
                    onClick={() => this.buttonLogOut()}
                    className="dropdown-item"
                  >
                    Đăng xuất
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginStatus: state.loginReducer,
  };
};
export default connect(mapStateToProps)(NavUser);
