import React, { Component } from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import Axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ChonGhe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seat: [],
      seatAvailable: [],
      seatReserved: [],
      seatBooked: [],
      isGoThongTinDatVe: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.seatReserved.length === 0) {
      store.addNotification({
        message: "Vui lòng chọn ghế bạn muốn",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "animate__flipInX"],
        animationOut: ["animated", "animate__fadeOutDown"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    } else {
      this.props.dslichchayData.map((item) => {
        if (item.idTuyen === this.step1.idTuyen) {
          return (this.tongtien =
            parseInt(item.Gia) * parseInt(this.state.seatReserved.length));
        }
      });
      this.setState(
        { isGoThongTinDatVe: true, tongtien: this.tongtien },
        () => {
          if (typeof Storage !== "undefined") {
            // Khởi tạo sesionStorage
            sessionStorage.setItem("chonghe", JSON.stringify(this.state));
          } else {
            alert("Trình duyệt của bạn không hỗ trợ!");
          }
          return console.log(this.state);
        }
      );
    }
  }

  // xử lý sự kiện onclich chọn ghế
  onClickData(seat) {
    if (this.state.seatBooked.indexOf(seat) > -1) {
      store.addNotification({
        message: "Ghế này đã có người đặt trước, vui lòng chọn ghế khác",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "animate__flipInX"],
        animationOut: ["animated", "animate__fadeOutDown"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    } else if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter((res) => res !== seat),
      });
      store.addNotification({
        message: "Bạn đã bỏ chọn ghế " + seat,
        type: "info",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "animate__flipInX"],
        animationOut: ["animated", "animate__fadeOutDown"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter((res) => res !== seat),
      });
      store.addNotification({
        message: "Bạn vừa chọn ghế " + seat,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "animate__flipInX"],
        animationOut: ["animated", "animate__fadeOutDown"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }
  }
  step1; // biến chứa dữ liệu từ session storage

  tongtien;

  UNSAFE_componentWillMount() {
    if (typeof Storage !== "undefined") {
      // get sessionStorage
      this.step1 = JSON.parse(sessionStorage.getItem("chonTuyen"));
    } else {
      alert("Vui lòng quay lại trang chủ");
    }
  }

  //get data từ API
  getDataAPI() {
    Axios.all([
      Axios.get("/api/lichchay"),
      Axios.get("/api/xe"),
    ])
      .then((resArr) => {
        // đẩy dữ liệu danh sách lịch chạy từ API get được vào reducer
        this.props.dispatch({
          type: "FETCH_DSLICHCHAY",
          payload: resArr[0].data,
        });
        // đẩy dữ liệu danh sách xe từ API get được vào reducer
        this.props.dispatch({
          type: "FETCH_DSXE",
          payload: resArr[1].data,
        });

        // lấy id xe, lấy id lịch chạy
        this.props.dslichchayData.map((item) => {
          if (item.idTuyen === this.step1.idTuyen) {
            this.setState({ idXe: item.idXe, idLichChay: item.id }, () => {
              console.log(this.state);
            });
          }
        });

        // lấy danh sách ghế từ xe ra
        this.props.dsxeData.map((item) => {
          if (item.id === this.state.idXe) {
            // đẩy tất cả ghế vào dạng chuỗi
            var tatcaghe = item.TatCaGhe.split(/[\s,]+/);
            // đẩy các ghế đã đặt vào dạng chuỗi
            var ghedadat = item.GheDaDat.split(/[\s,]+/);
            // lọc ra ghế còn trống
            const ghetrong = tatcaghe.filter((i) => !ghedadat.includes(i));

            // đẩy tất cả ghế vào ma trận sợ đồ để in ra
            const toMatrix = (arr, width) =>
              arr.reduce(
                (rows, key, index) =>
                  (index % width === 0
                    ? rows.push([key])
                    : rows[rows.length - 1].push(key)) && rows,
                []
              );
            var matranghe = toMatrix(tatcaghe, 4);

            this.setState({
              seatBooked: ghedadat,
              seatAvailable: ghetrong,
              seat: matranghe,
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getDataAPI();
  }

  render() {
    // định dạng ngày đi ra màn hình
    var ngaydi = this.step1.ngayDi;
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

    //điều kiện chuyển hướng
    if (this.state.isGoThongTinDatVe === true) {
      return <Redirect to="/thong-tin-dat-ve" />;
    }
    return (
      <section id="chonghe">
        <ReactNotification />
        <div className="container">
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
            <div className="md-step">
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
            <div className="col-md-8">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Mời bạn chọn ghế</h4>
                </div>
                <div className="table-responsive|table-responsive-sm|table-responsive-md|table-responsive-lg|table-responsive-xl">
                  <h5
                    id="text-confirm"
                    style={{ fontWeight: 300, marginTop: "24px" }}
                  >
                    Bạn đã chọn
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        paddingLeft: "3px",
                        paddingRight: "3px",
                      }}
                    >
                      ({this.state.seatReserved.length})
                    </span>
                    ghế
                    <br />
                    {this.state.seatReserved.map((item) => {
                      return item + ", ";
                    })}
                  </h5>
                  <h5 id="tongTien" style={{ fontWeight: 300 }}>
                    Tổng số tiền là:
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      (
                      {this.props.dslichchayData.map((item, index) => {
                        if (item.idTuyen === this.step1.idTuyen) {
                          return (
                            parseInt(item.Gia) *
                            parseInt(this.state.seatReserved.length)
                          )
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                      })}
                      )
                    </span>
                    đ
                  </h5>
                </div>
                <DrawGrid
                  seat={this.state.seat}
                  available={this.state.seatAvailable}
                  reserved={this.state.seatReserved}
                  booked={this.state.seatBooked}
                  onClickData={this.onClickData.bind(this)}
                />
              </div>
            </div>
            {/* end col 8 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">
                    {this.step1.inputTuyen} <br />
                    {inngaydi}
                  </h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-check form-check-radio">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          defaultValue="option2"
                          defaultChecked
                        />
                        Giá vé:{" "}
                        {this.props.dslichchayData.map((item, index) => {
                          if (item.idTuyen === this.step1.idTuyen) {
                            return item.Gia.toString().replace(
                              /\B(?=(\d{3})+(?!\d))/g,
                              ","
                            );
                          }
                        })}{" "}
                        đ / người
                        <span className="circle">
                          <span className="check" />
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <h4
                        className="info-title"
                        style={{ marginBottom: "0px" }}
                      >
                        Biển số xe
                      </h4>
                      <p>
                        {this.props.dsxeData.map((item) => {
                          if (item.id === this.state.idXe) {
                            return item.BSXe;
                          }
                        })}
                      </p>
                    </div>

                    <div className="form-group">
                      <h4
                        className="info-title"
                        style={{ marginBottom: "0px" }}
                      >
                        Giờ khởi hành
                      </h4>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        name="GioKhoiHanh"
                      >
                        <option value="06:00">06:00</option>
                        <option value="09:00">09:00</option>
                        <option value="12:00">12:00</option>
                        <option value="18:00">18:00</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <h4
                        className="info-title"
                        style={{ marginBottom: "0px" }}
                      >
                        Điểm lên xe
                      </h4>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect2"
                      >
                        <option>475A Điện Biên Phủ</option>
                        <option>Khu Công Nghệ Cao</option>
                        <option>Ung Văn Khiêm</option>
                      </select>
                    </div>
                    <div className="info pt-1">
                      <h4 className="info-title">Miễn phí</h4>
                      <div className="icon icon-info">
                        <div className="icon icon-primary">
                          <i className="material-icons">wifi</i>
                          <i className="material-icons">fastfood</i>
                          <i className="material-icons">music_video</i>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-block btn-success"
                      onClick={(e) => this.handleSubmit(e)}
                    >
                      Tiếp tục <span className="material-icons">forward</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* end col 4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    );
  }
}

class DrawGrid extends React.Component {
  render() {
    var classOfSeat = (col) => {
      if (this.props.reserved.indexOf(col) > -1) {
        return "reserved";
      } else if (this.props.booked.indexOf(col) > -1) {
        return "booked";
      } else {
        return "available";
      }
    };
    return (
      <div className="container">
        <table className="table table-striped|table-dark|table-bordered|table-borderless|table-hover|table-sm">
          <thead
            className="thead-dark|thead-light"
            style={{ padding: "16px 16px" }}
          >
            <tr>
              <th scope="col" style={{ color: "#ff9e00" }}>
                Sơ đồ ghế
              </th>
              <th scope="col">
                <div style={{ color: "#eaeaea" }}>
                  <span className="material-icons">
                    airline_seat_recline_extra
                  </span>
                  <br /> đã đặt
                </div>
              </th>
              <th scope="col">
                <div style={{ color: "#ff9e00" }}>
                  <span className="material-icons">
                    airline_seat_recline_extra
                  </span>
                  <br /> đang chọn
                </div>
              </th>
              <th scope="col">
                <div style={{ color: "#202429" }}>
                  <span className="material-icons">
                    airline_seat_recline_extra
                  </span>
                  <br /> còn trống
                </div>
              </th>
            </tr>
          </thead>
          {/* end table header */}
          <tbody>
            <tr>
              <td>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="assets/img/volang.png"
                  alt="Tài xế"
                />{" "}
                <h4 className="card-title">Lái xe</h4>
              </td>
              <td></td>
              <td></td>
              <td>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="assets/img/cua.png"
                  alt="Cửa lên xuống"
                />
                <h4 className="card-title">Cửa lên</h4>
              </td>
            </tr>
            {this.props.seat.map((row) => (
              <tr key={row}>
                {row.map((col) => (
                  <td
                    className={classOfSeat(col)}
                    key={col}
                    onClick={(e) => this.onClickSeat(col)}
                  >
                    <span className="material-icons">
                      airline_seat_recline_extra
                    </span>
                    <br />
                    {col}{" "}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* <AvailableList available={this.props.available} /> */}
        {/* <ReservedList reserved={this.props.reserved} /> */}
      </div>
    );
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}

// class AvailableList extends React.Component {
//   render() {
//     const seatCount = this.props.available.length;
//     return (
//       <div className="text-center">
//         <h4>
//           Ghế còn trống: ({seatCount === 0 ? "No seats available" : seatCount})
//         </h4>
//         <span>
//           {this.props.available.map((res) => (
//             <p key={res}>{res} - </p>
//           ))}
//         </span>
//       </div>
//     );
//   }
// }

// class ReservedList extends React.Component {
//   render() {
//     return (
//       <div className="right">
//         <h4>Ghế đang chọn: ({this.props.reserved.length})</h4>
//         <ul>
//           {this.props.reserved.map((res) => (
//             <li key={res}>{res}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

const mapStateToProps = (state, ownProps) => {
  return {
    dslichchayData: state.dslichchayReducer.dslichchayData,
    dsxeData: state.dsxeReducer.dsxeData,
  };
};

export default connect(mapStateToProps)(ChonGhe);
