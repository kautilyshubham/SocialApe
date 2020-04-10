import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, Link } from "@material-ui/core";
import { isEmailValid, isEmpty } from "../utils/globalFunctions";
import { $userLogin } from "../network/userAction";
import { connect } from "react-redux";
import { ShowToast } from "../components/Toster";
import keyConst from "../network/keyConst";
import "../styles/login.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
  }
  state = {
    email: "",
    password: "",
    error: {},
    type: "password",
  };

  componentDidMount() {
    this.emailRef.current.focus();
  }

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
    } else {
      this.setState({ password: value });
    }
  };
  checkError = () => {
    this.setState({ error: {} });
    const emailCheck = isEmailValid(this.state.email);

    if (emailCheck !== true) {
      this.setState({ error: emailCheck }, () =>
        console.log(this.state.error, "email")
      );
      return false;
    } else if (isEmpty(this.state.password)) {
      let err = {};
      err["password"] = "Password required!";
      this.setState({ error: err });
      return false;
    } else {
      return true;
    }
  };
  onSubmitHandler = () => {
    const isValid = this.checkError();
    const loginData = {
      email: this.state.email,
      password: this.state.password,
    };
    if (isValid) {
      this.props.$userLogin(loginData, (res) => {
        ShowToast(keyConst.TOAST_SUCCESS, "Login successfull!");
        this.props.history.push("/");
      });
    }
  };

  render() {
    return (
      <div className="login_page">
        <div className="login_form_box">
          <h2 className="heading" style={{ textAlign: "center" }}>
            Login to SocialApe
          </h2>
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <div className="input_group">
              <input
                type="email"
                className="input-control"
                value={this.state.email}
                placeholder="Email"
                ref={this.emailRef}
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
            <label htmlFor="email">Password</label>
            <div className="input_group">
              <input
                type={this.state.type}
                className="input-control"
                placeholder="Password"
                value={this.state.password}
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
          <div className="login_btns">
            <button
              className="login_btn"
              onClick={() => this.onSubmitHandler()}
            >
              Login
            </button>
            <Link href="/signup">Don't have account?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { $userLogin })(Login);
