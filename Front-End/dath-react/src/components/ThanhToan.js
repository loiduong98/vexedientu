import React, { Component } from "react";

export default class ThanhToan extends Component {
  render() {
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
                                <td className="col-xs-3">Tuyến:</td>
                                <td />
                              </tr>
                              <tr>
                                <td>Ngày đi:</td>
                                <td>Ghế/giường:</td>
                              </tr>
                              <tr>
                                <td>Họ tên:</td>
                                <td>Ngày sinh:</td>
                              </tr>
                              <tr>
                                <td>Email:</td>
                                <td>SĐT:</td>
                              </tr>
                              <tr>
                                <td>Tổng tiền:</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-lg-12 col-md-12 col-sm-2 col-xs-12 col-ms-12">
                          <a
                            href="./check-3.html"
                            className="btn btn-primary btn-block"
                          >
                            Quay lại
                          </a>
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
