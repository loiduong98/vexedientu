import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class ThongTinDatVe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaderSpinner: false,
      inputPhone: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  loader = {};

  // lấy số điện thoại người dùng nhập vào
  inputPhone(e) {
    if (e.target.value.length === 10) {
      this.setState({ inputPhone: e.target.value, isLoaderSpinner: false });
    } else {
      this.setState({
        isLoaderSpinner: true,
        inputPhone: e.target.value,
      });
    }
  }
  // bắt sự kiện khách hàng điền thông tin vào form
  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        return console.log(this.state);
      }
    );
  }
  getdskhachhang() {
    Axios.get("http://localhost:8000/api/khachhang")
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

  render() {
    var customerForm = this.props.khachhangData.map((item, index) => {
      if (this.state.inputPhone === "") {
        return;
      } else if (this.state.isLoaderSpinner === true) {
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
      } else if (item.SDT !== this.state.inputPhone) {
        return (
          <div key={index}>
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
      } else {
        return (
          <div key={index}>
            <div className="form-group label-floating has-success">
              <label class="control-label"></label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                name="inputHoTen"
                defaultValue={item.HoTen}
              />
              <span className="form-control-feedback">
                <i className="material-icons">done</i>
              </span>
            </div>
            <div className="form-group label-floating has-success">
              <label class="control-label"></label>
              <input
                onChange={this.handleChange}
                type="email"
                className="form-control"
                name="inputEmail"
                defaultValue={item.Email}
              />
              <span className="form-control-feedback">
                <i className="material-icons">done</i>
              </span>
            </div>
            <div className="form-group label-floating has-success">
              <label class="control-label"></label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                name="inputAddress"
                defaultValue={item.DiaChi}
              />
              <span className="form-control-feedback">
                <i className="material-icons">done</i>
              </span>
            </div>
          </div>
        );
      }
    });

    return (
      <div className="container" style={{ marginTop: "100px" }}>
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
                  {customerForm}

                  <div className="form-row">
                    <button type="submit" className="btn btn-block btn-success">
                      Tiếp tục <span class="material-icons">forward</span>
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