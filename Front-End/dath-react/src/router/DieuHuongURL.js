import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import DangKy from "../components/DangKy";
import DangNhap from "../components/DangNhap";
import LienHe from "../components/LienHe";
import ChonGhe from "../components/ChonGhe";
import ThongTinDatVe from "../components/ThongTinDatVe";
import ThanhToan from "../components/ThanhToan";

class DieuHuongURL extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dang-ky" component={DangKy} />
        <Route path="/dang-nhap" component={DangNhap} />
        <Route path="/lien-he" component={LienHe} />
        <Route path="/chon-ghe" component={ChonGhe} />
        <Route path="/thong-tin-dat-ve" component={ThongTinDatVe} />
        <Route path="/thanh-toan" component={ThanhToan} />
      </Switch>
    );
  }
}

export default DieuHuongURL;
