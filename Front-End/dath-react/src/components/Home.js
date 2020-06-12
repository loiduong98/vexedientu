import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ngayDi: new Date(),
      idBenDi: 0,
      idBenDen: 0,
      idTuyen: 0,
      inputTuyen: "",
      isRedirectToChonGhe: false,
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // get danh sách tuyến và danh sách bến từ API
  getAll() {
    Axios.all([
      Axios.get("/api/ben"),
      Axios.get("/api/tuyen"),
    ])
      .then((resArr) => {
        //console.log(resArr[0].data); // in ra danh sách bến để test
        //console.log(resArr[1].data); // in ra danh sách tuyến để test
        // đẩy danh sách bên lấy từ API vào state trong reducer
        this.props.dispatch({
          type: "FETCH_DSBEN",
          payload: resArr[0].data,
        });
        // đẩy danh sách tuyến lấy từ API vào state trong reducer
        this.props.dispatch({
          type: "FETCH_DSTUYEN",
          payload: resArr[1].data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // force update HTML
  componentDidMount() {
    this.getAll();
  }

  // bắt sự kiện thay đổi ngày
  handleDateChange = (date) => {
    this.setState({
      ngayDi: date,
    });
  };

  //bắt sự kiện thay đổi tuyến đi, tuyến đến
  handleChange(event) {
    this.setState({
      [event.target.name]: parseInt(event.target.value),
    });
  }

  // sự kiện nhấn button submit
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.idBenDi === 0) {
      store.addNotification({
        message: "Vui lòng chọn điểm đi",
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
    } else if (this.state.idBenDen === 0) {
      store.addNotification({
        message: "Vui lòng chọn điểm đến",
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
      this.props.dstuyenData.map((tuyen, index) => {
        if (
          tuyen.idBenDi === this.state.idBenDi &&
          tuyen.idBenDen === this.state.idBenDen
        ) {
          this.setState(
            {
              idTuyen: tuyen.id,
              inputTuyen: tuyen.TenTuyen,
            },
            () => {
              if (typeof Storage !== "undefined") {
                // Khởi tạo sesionStorage
                sessionStorage.setItem("chonTuyen", JSON.stringify(this.state));
              } else {
                alert("Trình duyệt của bạn không hỗ trợ!");
              }
              return console.log(this.state);
            }
          );
        }
      });
      this.setState({ isRedirectToChonGhe: true });
    }
  }

  // mảng a1 lưu trữ các bến có thể chọn
  a1 = [];

  render() {
    
    // lấy id những bến có thể đến sau khi chọn bến đi
    if (this.state.idBenDi === 0) {
      console.log("Chưa chọn bến đi");
    } else {
      this.a1 = [];
      this.props.dstuyenData.map((item, index) => {
        if (this.state.idBenDi === item.idBenDi) {
          this.a1.push(item.idBenDen);
        }
      });
    }

    // in ra giao diện các danh sách bến có thể đi
    var dsbenden = this.props.dsbenData.map((item, index) => {
      if (this.a1.indexOf(item.id) !== -1) {
        return (
          <option key={index} value={item.id}>
            {item.TenBen}
          </option>
        );
      }
    });
    //điều kiện chuyển hướng
    if (this.state.isRedirectToChonGhe === true) {
      return <Redirect to="/chon-ghe" />;
    }
    
    return (
      <div>
        <div id="booking" className="section">
          <ReactNotification />
          <div className="cloud"></div>
          <div className="section-center">
            <div className="container">
              <div className="row">
                <div className="booking-form z-indept-2">
                  <form>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <select
                            className="form-control"
                            onChange={(event) => this.handleChange(event)}
                            id="benDi"
                            name="idBenDi"
                          >
                            <option value={this.state.idBenDi}>
                              Chọn điểm đi
                            </option>
                            {this.props.dsbenData.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>
                                  {item.TenBen}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <select
                            className="form-control"
                            onChange={(event) => this.handleChange(event)}
                            id="benDen"
                            name="idBenDen"
                          >
                            <option value={this.state.idBenDen}>
                              Chọn điểm đến
                            </option>
                            {dsbenden}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group bmd-form-group">
                          <DatePicker
                            name="date"
                            className="form-control"
                            selected={this.state.ngayDi}
                            onChange={this.handleDateChange}
                            minDate={new Date()}
                            name="startDate"
                            dateFormat="MM/dd/yyyy"
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-btn">
                          <button
                            onClick={(event) => this.handleSubmit(event)}
                            className="btn btn-warning btn-block btn-lg waves-effect waves-light z-indept-1"
                          >
                            Mua vé
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end section search */}
        <div className="cd-section" id="projects">
          {/*     *********    PROJECTS 1     *********      */}
          <div className="projects-1" id="projects-1">
            <div className="container">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto text-center">
                  <h2 className="title">Some of Our Awesome Products - 1</h2>
                  <ul className="nav nav-pills nav-pills-rose">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#pill1"
                        data-toggle="tab"
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pill2" data-toggle="tab">
                        Marketing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pill3" data-toggle="tab">
                        Development
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pill3" data-toggle="tab">
                        Productivity
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pill3" data-toggle="tab">
                        Web Design
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-space">
                    <div className="tab-pane active" id="pill1" />
                    <div className="tab-pane" id="pill2" />
                    <div className="tab-pane" id="pill3" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="card card-raised card-background"
                    style={{
                      backgroundImage: 'url("assets/img/examples/office2.jpg")',
                    }}
                  >
                    <div className="card-body">
                      <h6 className="card-category text-info">Productivity</h6>
                      <a href="#pablo">
                        <h3 className="card-title">
                          The Best Productivity Apps on Market
                        </h3>
                      </a>
                      <p className="card-description">
                        Don't be scared of the truth because we need to restart
                        the human foundation in truth And I love you like Kanye
                        loves Kanye I love Rick Owens’ bed design but the back
                        is...
                      </p>
                      <a href="#pablo" className="btn btn-danger btn-round">
                        <i className="material-icons">content_copy</i> View App
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="card card-raised card-background"
                    style={{
                      backgroundImage:
                        'url("assets/img/examples/card-blog3.jpg")',
                    }}
                  >
                    <div className="card-body">
                      <h6 className="card-category text-info">Design</h6>
                      <h3 className="card-title">
                        The Sculpture Where Details Matter
                      </h3>
                      <p className="card-description">
                        Don't be scared of the truth because we need to restart
                        the human foundation in truth And I love you like Kanye
                        loves Kanye I love Rick Owens’ bed design but the back
                        is...
                      </p>
                      <a href="#pablo" className="btn btn-info btn-round">
                        <i className="material-icons">build</i> View Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className="card card-raised card-background"
                    style={{
                      backgroundImage:
                        'url("assets/img/examples/card-project6.jpg")',
                    }}
                  >
                    <div className="card-body">
                      <h6 className="card-category text-info">Marketing</h6>
                      <h3 className="card-title">
                        0 to 100.000 Customers in 6 months
                      </h3>
                      <p className="card-description">
                        Don't be scared of the truth because we need to restart
                        the human foundation in truth And I love you like Kanye
                        loves Kanye I love Rick Owens’ bed design but the back
                        is...
                      </p>
                      <a href="#pablo" className="btn btn-warning btn-round">
                        <i className="material-icons">subject</i> Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dsbenData: state.dsbenReducer.dsbenData,
    dstuyenData: state.dstuyenReducer.dstuyenData,
  };
};

export default connect(mapStateToProps)(Home);
