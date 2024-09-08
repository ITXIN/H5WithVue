import React, { Component } from "react";
import { connect } from "react-redux";
import { redirect } from "react-router-dom";

class Login extends Component {
  render() {
    return this.props.user ? (
      <div className="row">
        <div className="col-md-6 col-md-offset-6">个人中心</div>
      </div>
    ) : (
      <button onClick={() => redirect("/login")}>退出</button>
    );
  }
}

Login = connect((state) => state.session)(Login);
export default Login;
