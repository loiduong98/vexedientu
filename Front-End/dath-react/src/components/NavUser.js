import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import swal from "sweetalert";

class NavUser extends Component {
  buttonLogOut() {
    this.props.dispatch({
      type: "CHANGE_LOGIN_STATUS",
    });
  }
  SDT =''
  idKH1='';
  getDataAPI() {
    Axios.all([
      Axios.get("/api/login"),
      Axios.get("/api/khachhang"),
      Axios.get("/api/ve"),
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
       
        var emailKH = localStorage.getItem("email");
        console.log(emailKH);
        
        this.props.dskhachhangData.filter((kh,index)=> {
          return kh.email === emailKH;
        }).map((sdtKH,index)=> {
          return this.SDT = sdtKH.phone;
        });
        this.props.khachhangData.filter((kh1,index)=> {
          return kh1.SDT === this.SDT;
        }).map((idKH,index)=> {
          return this.idKH1 = idKH.id ;
        })
        localStorage.setItem("idKH", this.idKH1)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getDataAPI();
  }
  _handleSubmit = (values) => {
    // const xsrfToken = this.getCookie("XSRF-TOKEN");

    var postData = values;
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        // "X-XSRF-TOKEN": xsrfToken,
        "Access-Control-Allow-Origin": "*",
      },
    };
    Axios.post("/api/login", postData, axiosConfig)
      .then((res) => {
        if (res.data.status === "true") {
          this.props.dispatch({
            type: "CHANGE_LOGIN_STATUS",
          });
          this.props.history.push("/");
        } else {
          swal({
            title: "Lỗi Đăng Nhập",
            text: res.data.message,
            icon: "warning",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(values);
  };

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
                <Link to="/danh-sach-ve" className="nav-link">
                  <i className="material-icons">article</i> Danh sách vé
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/trao-doi-ve" className="nav-link">
                  <i className="material-icons">compare_arrows</i> Trao đổi vé
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
                      // src="https://professionalsofthefuture.com/wp-content/uploads/2018/12/user-icon.png"
                      src="./assets/img/user-icon.png"
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
                    to="#"
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
    dskhachhangData: state.dskhachhangReducer.dskhachhangData,
    khachhangData: state.khachhangReducer.khachhangData,
    dsVeData: state.dsVeReducer.dsVeData,
  };
};
export default connect(mapStateToProps)(NavUser);
