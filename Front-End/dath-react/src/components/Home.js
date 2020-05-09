import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }
  render() {
    return (
      <div>
        <div id="booking" className="section">
          <div className="section-center">
            <div className="container">
              <div className="row">
                <div className="booking-form z-indept-2">
                  <form>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group bmd-form-group">
                          <select
                            className="form-control selectpicker"
                            data-style="btn btn-link"
                            id="exampleFormControlSelect1"
                          >
                            <option>Hà Nội</option>
                            <option>Đà Lạt</option>
                            <option>TP.HCM</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group bmd-form-group">
                          <select
                            className="form-control selectpicker"
                            data-style="btn btn-link"
                            id="exampleFormControlSelect1"
                          >
                            <option>Cần Thơ</option>
                            <option>Bến Tre</option>
                            <option>Tiền Giang</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group bmd-form-group">
                          {/* <input
                            className="form-control"
                            type="date"
                            required
                          /> */}
                          <DatePicker
                            className="form-control"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            minDate={new Date()}
                            name="startDate"
                            dateFormat="MM/dd/yyyy"
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-btn">
                          <button className="btn btn-warning btn-block btn-lg waves-effect waves-light z-indept-1">
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

export default Home;
