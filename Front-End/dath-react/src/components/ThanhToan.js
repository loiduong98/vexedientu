import React, { Component } from "react";

export default class ThanhToan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  step1; // dữ liệu bước chọn tuyến
  step2; // dữ liệu bước chọn ghế
  step3; // dữ liệu bước điền thông tin khách hàng
  componentWillMount() {
    if (typeof Storage !== "undefined") {
      // get sessionStorage
      this.step1 = JSON.parse(sessionStorage.getItem("chonTuyen"));
      this.step2 = JSON.parse(sessionStorage.getItem("chonghe"));
      this.step3 = JSON.parse(sessionStorage.getItem("thongtinkhachhang"));
      this.setState(
        {
          tuyen: this.step1.inputTuyen,
          ngaydi: this.step1.ngayDi,
          // ép mảng ghế về chuỗi cho phù hợp với cơ sở dữ liệu
          ghedat: this.step2.seatReserved.toString(),
          // các ghế đã đặt ở dạng mảng để có thể in ra giao diện
          ghe: this.step2.seatReserved,
          tongtien: this.step2.tongtien,
          hoten: this.step3.inputHoTen,
          sdt: this.step3.inputPhone,
          email: this.step3.inputEmail,
          diachi: this.step3.inputAddress,
          idxe: this.step2.idXe,
          idlichchay: this.step2.idLichChay,
          idtuyen: this.step1.idTuyen,
        },
        () => {
          return console.log(this.state);
        }
      );
    } else {
      alert("Vui lòng quay lại trang chủ");
    }
  }

  render() {
    var ngaydi = this.state.ngaydi;
    var tempdate = "";
    var inngaydi = tempdate.concat(
      ngaydi.substr(8, 2),
      " ",
      ngaydi.substr(4, 1),
      " ",
      ngaydi.substr(5, 2),
      " ",
      ngaydi.substr(4, 1),
      " ",
      ngaydi.substr(0, 4)
    );
    return (
      <section className="payment" style={{ marginTop: "100px" }}>
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
          <div className="md-step active">
            <div className="md-step-circle">
              <span className="material-icons">credit_card</span>
            </div>
            <div className="md-step-title">Thanh toán</div>
            <div className="md-step-bar-left" />
            <div className="md-step-bar-right" />
          </div>
        </div>
        <div className="container">
          <div className="alert alert-warning">
            <strong>Lưu ý !</strong> Nếu quý khách chọn thanh toán chuyển khoản,
            vui lòng chuyển tiền vé trong vòng <strong>12 tiếng</strong> kể từ
            thời gian đặt vé.
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-ms-12">
              <div className="card">
                <div className="card-header card-header-rose">
                  <h4 className="card-title">Chọn phương thức thanh toán</h4>
                </div>
                <div className="card-body">
                  Đang phát triển phương thức thanh toán
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-ms-12">
              <div className="card">
                <div className="card-header card-header-rose">
                  <h4 className="card-title">Thông tin đặt vé</h4>
                </div>
                <div className="card-body">
                  <div className="panel">
                    <form action className="form-horizontal">
                      <div className="form-group">
                        <div className="col-md-12">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>Tuyến</td>
                                <td>
                                  <span style={{ fontWeight: "bold" }}>
                                    {this.state.tuyen}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ngày đi </td>
                                <td>
                                  <span style={{ fontWeight: "bold" }}>
                                    {inngaydi}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Ghế </td>
                                <td>
                                  <span style={{ fontWeight: "bold" }}>
                                    {this.state.ghe.map((item) => {
                                      return item + ",   ";
                                    })}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Họ Tên </td>
                                <td>
                                  <span style={{ fontWeight: "bold" }}>
                                    {this.state.hoten}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Số điện thoại </td>
                                <td>
                                  <span style={{ fontWeight: "bold" }}>
                                    {this.state.sdt}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Tổng tiền </td>
                                <td>
                                  <span style={{ fontWeight: "bold" }}>
                                    {this.state.tongtien
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-lg-12 col-md-12 col-sm-2 col-xs-12 col-ms-12">
                          <button className="btn btn-primary btn-block">
                            Thanh Toán
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
