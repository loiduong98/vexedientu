import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { Redirect } from "react-router-dom";

class ThongTinDatVe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoPayment: false,
      isLoaderSpinner: false,
      inputPhone: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // lấy số điện thoại người dùng nhập vào
  inputPhone(e) {
    if (e.target.value.length === 10) {
      this.props.khachhangData.map((item) => {
        if (item.SDT === e.target.value) {
          this.setState({
            inputHoTen: item.HoTen,
            inputAddress: item.DiaChi,
            inputEmail: item.Email,
            isOldCustomer: true,
          });
        }
      });
      this.setState({ inputPhone: e.target.value, isLoaderSpinner: false });
    } else {
      this.setState({
        isLoaderSpinner: true,
        inputPhone: e.target.value,
        isOldCustomer: false,
      });
    }
  }
  // bắt sự kiện khách hàng điền thông tin vào form
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // Khi người dùng nhấn nút tiếp tục qua trang khác
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.inputPhone === "") {
      store.addNotification({
        message: "Vui lòng nhập số điện thoại",
        type: "warning",
        insert: "top",
        container: "top-left",
        animationIn: ["animated", "animate__flipInX"],
        animationOut: ["animated", "animate__fadeOutDown"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    } else if (this.state.inputHoTen === undefined) {
      store.addNotification({
        message: "Vui lòng nhập họ tên",
        type: "warning",
        insert: "top",
        container: "top-left",
        animationIn: ["animated", "animate__flipInX"],
        animationOut: ["animated", "animate__fadeOutDown"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    } else if (this.state.inputEmail === undefined) {
      store.addNotification({
        message: "Vui lòng nhập địa chỉ Email",
        type: "warning",
        insert: "top",
        container: "top-left",
        animationIn: ["animated", "animate__flipInX"],
        animationOut: ["animated", "animate__fadeOutDown"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    } else if (this.state.inputAddress === undefined) {
      store.addNotification({
        message: "Vui lòng nhập địa chỉ của bạn",
        type: "warning",
        insert: "top",
        container: "top-left",
        animationIn: ["animated", "animate__flipInX"],
        animationOut: ["animated", "animate__fadeOutDown"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    } else {
      this.setState({ isGoPayment: true }, () => {
        if (typeof Storage !== "undefined") {
          // Khởi tạo sesionStorage
          sessionStorage.setItem(
            "thongtinkhachhang",
            JSON.stringify(this.state)
          );
        } else {
          alert("Trình duyệt của bạn không hỗ trợ!");
        }
        return console.log(this.state);
      });
    }
  }
  // get danh sach khach hang tu API
  getdskhachhang() {
    Axios.get("/api/khachhang")
      .then((res) => {
        this.props.dispatch({
          type: "FETCH_KHACHHANG",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getdskhachhang();
  }

  customerForm(check) {
    if (this.state.inputPhone === "") {
      return;
    }
    if (this.state.isLoaderSpinner === true) {
      return (
        <div className="loader" style={{ display: "inline-block" }}>
          <div id="ld2">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      );
    }
    if (this.state.isOldCustomer !== true) {
      return (
        <div>
          <div className="form-group">
            <input
              onChange={(event) => this.handleChange(event)}
              type="text"
              className="form-control"
              name="inputHoTen"
              placeholder="Họ Tên"
            />
          </div>
          <div className="form-group">
            <input
              onChange={(event) => this.handleChange(event)}
              type="email"
              className="form-control"
              name="inputEmail"
              placeholder="youremail@example.com"
            />
          </div>
          <div className="form-group">
            <input
              onChange={(event) => this.handleChange(event)}
              type="text"
              className="form-control"
              name="inputAddress"
              placeholder="Địa chỉ"
            />
          </div>
        </div>
      );
    }
    if (this.state.isOldCustomer === true) {
      return (
        <div>
          <div className="form-group label-floating has-success">
            <label className="control-label"></label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="inputHoTen"
              defaultValue={this.state.inputHoTen}
            />
            <span className="form-control-feedback">
              <i className="material-icons">done</i>
            </span>
          </div>
          <div className="form-group label-floating has-success">
            <label className="control-label"></label>
            <input
              onChange={this.handleChange}
              type="email"
              className="form-control"
              name="inputEmail"
              defaultValue={this.state.inputEmail}
            />
            <span className="form-control-feedback">
              <i className="material-icons">done</i>
            </span>
          </div>
          <div className="form-group label-floating has-success">
            <label className="control-label"></label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="inputAddress"
              defaultValue={this.state.inputAddress}
            />
            <span className="form-control-feedback">
              <i className="material-icons">done</i>
            </span>
          </div>
        </div>
      );
    }
  }

  render() {
    //điều kiện chuyển hướng
    if (this.state.isGoPayment === true) {
      return <Redirect to="/thanh-toan" />;
    }

    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <ReactNotification />
        <div className="md-stepper-horizontal">
          <div className="md-step active">
            <div className="md-step-circle">
              <span className="material-icons">directions_bus</span>
            </div>
            <div className="md-step-title">Chọn tuyến</div>
            <div className="md-step-bar-left" />
            <div className="md-step-bar-right" />
          </div>
          <div className="md-step active">
            <div className="md-step-circle">
              <span className="material-icons">event_seat</span>
            </div>
            <div className="md-step-title">Chọn ghế</div>
            <div className="md-step-bar-left" />
            <div className="md-step-bar-right" />
          </div>
          <div className="md-step active">
            <div className="md-step-circle">
              <span className="material-icons">edit</span>
            </div>
            <div className="md-step-title">Điền thông tin</div>
            <div className="md-step-bar-left" />
            <div className="md-step-bar-right" />
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span className="material-icons">credit_card</span>
            </div>
            <div className="md-step-title">Thanh toán</div>
            <div className="md-step-bar-left" />
            <div className="md-step-bar-right" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header card-header-text card-header-info">
                <div className="card-text">
                  <h4 className="card-title">Thông tin đặt vé</h4>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <input
                      onChange={(e) => this.inputPhone(e)}
                      type="tel"
                      className="form-control"
                      name="inputPhone"
                      placeholder="Số điện thoại"
                      pattern="(\+84|0){1}(9|8|7|5|3){1}[0-9]{8}"
                    />
                  </div>
                  {this.customerForm(this.state.isOldCustomer)}

                  <div className="form-row">
                    <button
                      type="submit"
                      onClick={(event) => this.handleSubmit(event)}
                      className="btn btn-block btn-success"
                    >
                      Tiếp tục <span className="material-icons">forward</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* end col 6 */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header card-header-text card-header-info">
                <div className="card-text">
                  <h4 className="card-title">Điều khoản và lưu ý</h4>
                </div>
              </div>
              <div className="card-body">
                <div>
                  <p className="text-justify">
                    (*) Quý khách vui lòng mang email có chứa mã vé đến văn
                    phòng để đổi vé lên xe trước giờ xuất bến ít nhất
                    <strong className="text-primary">60 phút</strong> để chúng
                    tôi trung chuyển.
                  </p>
                  <p className="text-justify">
                    (*) Thông tin hành khách phải chính xác, nếu không sẽ không
                    thể lên xe hoặc hủy/đổi vé
                  </p>
                  <p className="text-justify">
                    (*) Quý khách không được đổi / trả vé vào các ngày Lễ Tết (
                    ngày thường qúy khách được quyền chuyển đổi hoặc hủy vé
                    <strong className="text-primary">một lần</strong> duy nhất
                    trước giờ xe chạy 24 giờ), phí hủy vé 10%.
                  </p>
                  <p className="text-justify">
                    (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ
                    số điện thoại
                    <br />
                    <strong
                      className="text-primary"
                      style={{ fontSize: "1.2em" }}
                    >
                      1900 6067
                    </strong>
                    trước khi đặt vé. Chúng tôi sẽ không đón/ trung chuyển tại
                    những điểm xe trung chuyển không thể tới được.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end col 6 */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    khachhangData: state.khachhangReducer.khachhangData,
  };
};
export default connect(mapStateToProps)(ThongTinDatVe);
