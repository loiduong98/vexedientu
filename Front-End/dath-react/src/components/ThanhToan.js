import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import Axios from "axios";
import retesData from "../data/ratesData.json";
import swal from "sweetalert";
import { Redirect } from "react-router-dom";

export default class ThanhToan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoNext: false,
    };
  }

  postDatVe() {
    // dữ liệu đẩy xuống backend xử lý
    var postData = this.state;
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

    Axios.post("/api/bookticket", postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        swal({
          title: "Tuyệt vời!",
          text: "Vé của bạn đã được đặt thành công!",
          icon: "success",
        }).then(() => {
          this.setState({ isGoNext: true });
        });
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }

  step1; // dữ liệu bước chọn tuyến
  step2; // dữ liệu bước chọn ghế
  step3; // dữ liệu bước điền thông tin khách hàng
  UNSAFE_componentWillMount() {
    if (typeof Storage !== "undefined") {
      // get sessionStorage
      this.step1 = JSON.parse(sessionStorage.getItem("chonTuyen"));
      this.step2 = JSON.parse(sessionStorage.getItem("chonghe"));
      this.step3 = JSON.parse(sessionStorage.getItem("thongtinkhachhang"));
      // chuyển tiền Việt nam qua tiền đô la để thanh toán paypal
      //console.log(this.doiTien(this.step2.tongtien, "USD", false));
      //console.log(typeof this.doiTien(this.step2.tongtien, "USD", false));
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
          tongtienUSD: this.doiTien(this.step2.tongtien, "USD", false),
        },
        () => {
          return console.log(this.state);
        }
      );
    } else {
      alert("Vui lòng quay lại trang chủ");
    }
  }

  // ham chuyen đổi tỷ giá ngoại tệ
  doiTien(money, code, encode = true) {
    const input = parseFloat(money);
    if (Number.isNaN(input)) {
      return "";
    }
    const currency = retesData.rates[0].value.find(
      (item) => item.code === code
    );
    if (!currency) {
      return "";
    }
    const sell = parseFloat(currency.sell.replace(",", ""));
    const output = encode ? input * sell : input / sell;
    const rounded = (Math.round(output * 1000) / 1000).toFixed(2);
    return rounded.toString();
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
    var pay = this.state.tongtienUSD;
    if (this.state.isGoNext === true) {
      return <Redirect to="/" />;
    }

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
                  <PayPalButton
                    amount={pay}
                    onSuccess={(details, data) => {
                      this.postDatVe();
                    }}
                    shippingPreference="NO_SHIPPING"
                    options={{
                      clientId:
                        "AWy4VjiZvKYejBmofoCTe_u7GKfgD5h8QJfyXCUVb-EnTogDnLBb-pPLEV8wH-LLGHoWaDyTIYqHB0WS",
                      currency: "USD",
                    }}
                  />
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
                    <form className="form-horizontal">
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
                                      .replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ","
                                      )}{" "}
                                    VNĐ
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Thanh toán Paypal</td>
                                <td>
                                  <span style={{ fontWeight: "bold" }}>
                                    {pay} USD
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* <div className="form-group">
                        <div className="col-lg-12 col-md-12 col-sm-2 col-xs-12 col-ms-12">
                          <button className="btn btn-primary btn-block">
                            Thanh Toán
                          </button>
                        </div>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
        <script>paypal.Buttons().render("body");</script>
      </section>
    );
  }
}
