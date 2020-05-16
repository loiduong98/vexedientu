import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class ThongTinDatVe extends Component {
  constructor(props) {
    super(props);
  }

  getdskhachhang() {
    Axios.get("http://localhost:8000/api/khachhang")
      .then((res) => {
        console.log(res.data);
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
    return (
      <div className="container" style={{ marginTop: "100px" }}>
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
                      type="tel"
                      className="form-control"
                      name="inputPhone"
                      placeholder="Số điện thoại"
                      pattern="(\+84|0){1}(9|8|7|5|3){1}[0-9]{8}"
                    />
                  </div>
                  <div className="loader" style={{ display: "none" }}>
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
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="inputHoTen"
                      placeholder="Họ Tên"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="inputEmail"
                      placeholder="youremail@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="inputAddress"
                      placeholder="Địa chỉ"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <button type="submit" className="btn btn-block btn-rose">
                        Đi lui
                      </button>
                    </div>
                    <div className="form-group col-md-6">
                      <button
                        type="submit"
                        className="btn btn-block btn-success"
                      >
                        Đi tới
                      </button>
                    </div>
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
