import React, { Component } from "react";

class ChonGhe extends Component {
  step1;
  componentWillMount() {
    if (typeof Storage !== "undefined") {
      // get sessionStorage
      this.step1 = JSON.parse(sessionStorage.getItem("chonTuyen"));
    } else {
      alert("Vui lòng quay lại trang chủ");
    }
  }

  render() {
    function reverseString(str) {
      // Step 1. Use the split() method to return a new array
      var splitString = str.split(""); // var splitString = "hello".split("");
      // ["h", "e", "l", "l", "o"]

      // Step 2. Use the reverse() method to reverse the new created array
      var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
      // ["o", "l", "l", "e", "h"]

      // Step 3. Use the join() method to join all elements of the array into a string
      var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
      // "olleh"

      //Step 4. Return the reversed string
      return joinArray; // "olleh"
    }
    var ngaydi = this.step1.ngayDi;
    var res = ngaydi.substr(0, 10);

    return (
      <section id="chonghe">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">
                    {this.step1.inputTuyen} <br />
                    {res}
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
                        Giá vé: 100.000 đ / người
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
                        Giờ khởi hành
                      </h4>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>06:00</option>
                        <option>09:00</option>
                        <option>12:00</option>
                        <option>18:00</option>
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
                  </form>
                </div>
              </div>
            </div>
            {/* end col 4 */}
            <div className="col-md-8">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Mời bạn chọn ghế</h4>
                </div>
                <div className="card-body text-center">
                  <div className="table-responsive|table-responsive-sm|table-responsive-md|table-responsive-lg|table-responsive-xl">
                    <h5 id="text-confirm" style={{ fontWeight: 300 }}>
                      Bạn đã chọn
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        0
                      </span>
                      ghế
                    </h5>
                    <h5 id="tongTien" style={{ fontWeight: 300 }}>
                      Tổng số tiền là:
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        (000,000)
                      </span>
                      đ
                    </h5>
                    <table className="table table-striped|table-dark|table-bordered|table-borderless|table-hover|table-sm">
                      <thead className="thead-dark|thead-light">
                        <tr>
                          <th scope="col" style={{ color: "#ff9e00" }}>
                            Sơ đồ ghế
                          </th>
                          <th scope="col">
                            <div style={{ color: "#eaeaea" }}>
                              <i className="fa fa-bed" /> đã đặt
                            </div>
                          </th>
                          <th scope="col">
                            <div style={{ color: "#ff9e00" }}>
                              <i className="fa fa-bed" /> đang chọn
                            </div>
                          </th>
                          <th scope="col">
                            <div style={{ color: "#202429" }}>
                              <i className="fa fa-bed" /> còn trống
                            </div>
                          </th>
                        </tr>
                      </thead>
                      {/* end table header */}
                      <tbody>
                        <tr>
                          <td>
                            <div className="seat" data-maghe="A1">
                              <i className="fa fa-bed" /> A1
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="A2">
                              <i className="fa fa-bed" /> A2
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="A3">
                              <i className="fa fa-bed" /> A3
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="A4">
                              <i className="fa fa-bed" /> A4
                            </div>
                          </td>
                          {/* end 1 seat */}
                        </tr>
                        {/* end 1 row */}
                        <tr>
                          <td>
                            <div className="seat" data-maghe="B1">
                              <i className="fa fa-bed" /> B1
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="B2">
                              <i className="fa fa-bed" /> B2
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="B3">
                              <i className="fa fa-bed" /> B3
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="B4">
                              <i className="fa fa-bed" /> B4
                            </div>
                          </td>
                          {/* end 1 seat */}
                        </tr>
                        {/* end 1 row */}
                        <tr>
                          <td>
                            <div className="seat" data-maghe="C1">
                              <i className="fa fa-bed" /> C1
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="C2">
                              <i className="fa fa-bed" /> C2
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="C3">
                              <i className="fa fa-bed" /> C3
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="C4">
                              <i className="fa fa-bed" /> C4
                            </div>
                          </td>
                          {/* end 1 seat */}
                        </tr>
                        {/* end 1 row */}
                        <tr>
                          <td>
                            <div className="seat" data-maghe="D1">
                              <i className="fa fa-bed" /> D1
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="D2">
                              <i className="fa fa-bed" /> D2
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="D3">
                              <i className="fa fa-bed" /> D3
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="D4">
                              <i className="fa fa-bed" /> D4
                            </div>
                          </td>
                          {/* end 1 seat */}
                        </tr>
                        {/* end 1 row */}
                        <tr>
                          <td>
                            <div className="seat" data-maghe="E1">
                              <i className="fa fa-bed" /> E1
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="E2">
                              <i className="fa fa-bed" /> E2
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="E3">
                              <i className="fa fa-bed" /> E3
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="E4">
                              <i className="fa fa-bed" /> E4
                            </div>
                          </td>
                          {/* end 1 seat */}
                        </tr>
                        {/* end 1 row */}
                        <tr>
                          <td>
                            <div className="seat" data-maghe="F1">
                              <i className="fa fa-bed" /> F1
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="F2">
                              <i className="fa fa-bed" /> F2
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="F3">
                              <i className="fa fa-bed" /> F3
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="F4">
                              <i className="fa fa-bed" /> F4
                            </div>
                          </td>
                          {/* end 1 seat */}
                        </tr>
                        {/* end 1 row */}
                        <tr>
                          <td>
                            <div className="seat" data-maghe="G1">
                              <i className="fa fa-bed" /> G1
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="G2">
                              <i className="fa fa-bed" /> G2
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="G3">
                              <i className="fa fa-bed" /> G3
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="G4">
                              <i className="fa fa-bed" /> G4
                            </div>
                          </td>
                          {/* end 1 seat */}
                        </tr>
                        {/* end 1 row */}
                        <tr>
                          <td>
                            <div className="seat" data-maghe="H1">
                              <i className="fa fa-bed" /> H1
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="H2">
                              <i className="fa fa-bed" /> H2
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="H3">
                              <i className="fa fa-bed" /> H3
                            </div>
                          </td>
                          {/* end 1 seat */}
                          <td>
                            <div className="seat" data-maghe="H4">
                              <i className="fa fa-bed" /> H4
                            </div>
                          </td>
                          {/* end 1 seat */}
                        </tr>
                        {/* end 1 row */}
                        <tr></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* end col 8 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    );
  }
}

export default ChonGhe;
