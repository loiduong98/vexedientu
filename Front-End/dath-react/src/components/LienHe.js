import React, { Component } from "react";

export default class LienHe extends Component {
  render() {
    return (
      <div id="lienhe">
        <div id="contactUsMap" className="big-map" />
        <div className="main main-raised">
          <div className="contact-content">
            <div className="container">
              <h2 className="title">Send us a message</h2>
              <div className="row">
                <div className="col-md-6">
                  <p className="description">
                    You can contact us with anything related to our Products.
                    We'll get in touch with you as soon as possible.
                    <br />
                    <br />
                  </p>
                  <form id="contact-form" method="post">
                    <div className="form-group">
                      <label htmlFor="name" className="bmd-label-floating">
                        Your name
                      </label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="exampleInputEmails"
                        className="bmd-label-floating"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmails"
                      />
                      <span className="bmd-help">
                        We'll never share your email with anyone else.
                      </span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="bmd-label-floating">
                        Phone
                      </label>
                      <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="form-group label-floating">
                      <label
                        className="form-control-label bmd-label-floating"
                        htmlFor="message"
                      >
                        {" "}
                        Your message
                      </label>
                      <textarea
                        className="form-control"
                        rows={6}
                        id="message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="submit text-center">
                      <input
                        type="submit"
                        className="btn btn-primary btn-raised btn-round"
                        defaultValue="Contact Us"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-4 ml-auto">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="material-icons">pin_drop</i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us at the office</h4>
                      <p>
                        {" "}
                        Bld Mihail Kogalniceanu, nr. 8,
                        <br /> 7652 Bucharest,
                        <br /> Romania
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="material-icons">phone</i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p>
                        {" "}
                        Michael Jordan
                        <br /> +40 762 321 762
                        <br /> Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="material-icons">business_center</i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Legal Information</h4>
                      <p>
                        {" "}
                        Creative Tim Ltd.
                        <br /> VAT · EN2341241
                        <br /> IBAN · EN8732ENGB2300099123
                        <br /> Bank · Great Britain Bank
                      </p>
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
