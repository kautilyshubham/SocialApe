import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, Link } from "@material-ui/core";
import { $userSignup } from "../network/userAction";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  isEmailValid,
  isValidPassword,
  isEmpty,
} from "../utils/globalFunctions";
import { connect } from "react-redux";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    handle: "",
    error: {},
    type: "password",
    isLoading: false,
  };

  changeTypeHandler = () => {
    if (this.state.type === "password") {
      this.setState({ type: "text" });
    } else {
      this.setState({ type: "password" });
    }
  };

  textChangeHandler = (key, value) => {
    if (key === "email") {
      this.setState({ email: value });
    } else if (key === "handle") {
      this.setState({ handle: value });
    } else {
      this.setState({ password: value });
    }
  };

  checkError = () => {
    this.setState({ error: {} });
    const emailCheck = isEmailValid(this.state.email);
    const passwordCheck = isValidPassword(this.state.password);

    if (emailCheck !== true) {
      this.setState({ error: emailCheck });
      return false;
    } else if (passwordCheck !== true) {
      this.setState({ error: passwordCheck });
      return false;
    } else if (isEmpty(this.state.handle)) {
      let err = {};
      err["handle"] = "Handle required.";
      this.setState({ error: err });
      return false;
    } else {
      return true;
    }
  };

  onSubmitHandler = () => {
    const isValid = this.checkError();
    const data = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.password,
      handle: this.state.handle,
    };
    if (isValid) {
      this.setState({ isLoading: true });
      this.props.$userSignup(data, (res) => {
        console.log(res, "signup");
        this.setState({ isLoading: false });
        this.props.history.push("/");
      });
    }
  };

  render() {
    return (
      <div className="login_page">
        <div className="login_form_box">
          <h2 className="heading" style={{ textAlign: "center" }}>
            Register to SocialApe
          </h2>
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <div className="input_group">
              <input
                type="email"
                className="input-control"
                required
                placeholder="Email"
                onChange={(e) =>
                  this.textChangeHandler("email", e.target.value)
                }
              />
            </div>
            <p>
              {this.state.error["email"] ? this.state.error["email"] : null}
            </p>
          </div>
          <div className="form_group">
            <label htmlFor="Password">Password</label>
            <div className="input_group">
              <input
                type={this.state.type}
                className="input-control"
                required
                placeholder="Password"
                onChange={(e) =>
                  this.textChangeHandler("password", e.target.value)
                }
              />
              <IconButton onClick={() => this.changeTypeHandler()}>
                {this.state.type === "password" ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </div>
            <p>
              {this.state.error["password"]
                ? this.state.error["password"]
                : null}
            </p>
          </div>
          <div className="form_group">
            <label htmlFor="handle">Handler</label>
            <div className="input_group">
              <input
                type="text"
                className="input-control"
                required
                placeholder="Handle"
                onChange={(e) =>
                  this.textChangeHandler("handle", e.target.value)
                }
              />
            </div>
            <p>
              {this.state.error["handle"] ? this.state.error["handle"] : null}
            </p>
          </div>
          <div className="login_btns">
            {this.state.isLoading ? (
              <CircularProgress
                color="primary"
                style={{ height: "20px", width: "20px" }}
              />
            ) : (
              <button
                className="login_btn"
                onClick={() => this.onSubmitHandler()}
              >
                Register
              </button>
            )}
            <Link href="/login">Already have account?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { $userSignup })(Signup);
