import React, { Component } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

export default class Home extends Component {
  render() {
    let styles = {
      padding: 0,
      margin: 0,
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div style={styles} className="col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div style={styles} className="col-md-4">
            <Navigation />
          </div>
          <div style={styles} className="col-md-8">
            <Content />
          </div>
        </div>
        <div className="row">
          <div style={styles} className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
