import React, { Component, version } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const UserSchema = yup.object().shape({
  maVe: yup.string().required("(*) Bạn chưa nhập mã vé"),
});
class DanhSachVe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maVe: "",
    };
  }
  getDataAPI() {
    Axios.all([Axios.get("/api/TicketUser/")])
      .then((resArr) => {
        // đẩy dữ liệu danh sách lịch chạy từ API get được vào reducer
        this.props.dispatch({
          type: "FETCH_TICKETUSER",
          payload: resArr[0].data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getDataAPI();
  }
  MaVe;
  thongTinVe;
  _handleSubmit = (values) => {
    this.setState({
      maVe: values,
    });
    this.MaVe = this.state.maVe.maVe;
    localStorage.setItem('maVe', this.MaVe);
  };
  renderVe(){
    let maVeLocal =  localStorage.getItem('maVe');
    console.log(maVeLocal);
    return this.props.ticketUserData.filter(ticket => ticket.maVe == maVeLocal).map((ve,index)=> {
      return (<tr key={index}>
        <td>{ve.HoTen}</td>
        <td>{ve.TenLC}</td>
        <td>{ve.NgayKhoiHanh}</td>
        <td>{ve.GioKhoiHanh}</td>     
      </tr>)
    })
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <Formik
            initialValues={{
              maVe: "",
            }}
            validationSchema={UserSchema}
            onSubmit={this._handleSubmit}
            render={(formikProps) => (
              <Form className="form"  style={{width:'50%', margin:'0 auto'}}>
                <h3>Mời bạn nhập mã vé</h3>
                <div className="form-group d-flex">
                  <Field
                    type="text"
                    name="maVe"
                    className="form-control"
                    style={{marginRight:'50px', paddingLeft:'15px'}}
                    onChange={formikProps.handleChange}
                    placeholder="Nhập mã vé để tra kết quả....."
                  />
                  <ErrorMessage name="maVe">
                    {(msg) => <div className="alert alert-danger">{msg}</div>}
                  </ErrorMessage>
                  <button className="btn btn-success ml-5">Tìm</button>
                </div>
              </Form>
            )}
          />
        </div>
        <div className="row">
          <div className="card">
            <div className="card-header card-header-danger">
              <h4 className="card-title">Thông tin vé</h4>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Họ tên</th>
                    <th>Tuyến</th>
                    <th>Ngày khởi hành</th>
                    <th>Giờ khởi hành</th>
                  </tr>
                </thead>
                <tbody>{this.renderVe()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ticketUserData: state.ticketUserReducer.ticketUserData,
  };
};

export default connect(mapStateToProps)(DanhSachVe);
