import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import PropsTypes from "prop-types";

// page and compoentns
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Navbar from "./components/Navbar";
import Mytheme from "./utils/theme";
import jwtDecode from "jwt-decode";
import AuthRoute from "./utils/AuthRoute";
import Loader from "./utils/Loader";
import { connect } from "react-redux";
import { SET_AUTHENTICATED } from "./store/types";

const theme = createMuiTheme(Mytheme);

let authenticated;
const token = localStorage.FBToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
    localStorage.clear();
  } else {
    authenticated = true;
  }
}

function App(props) {
  useEffect(() => {
    const token = localStorage.getItem("FBToken");
    if (token) {
      props.setAuthenticated();
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
      {props.isLoading && <Loader />}
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <AuthRoute
                exact
                path="/login"
                component={Login}
                authenticated={props.authenticated}
              />
              <AuthRoute
                exact
                path="/signup"
                component={Signup}
                authenticated={props.authenticated}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

AuthRoute.prototype = {
  user: PropsTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    authenticated: state.user.authenticated,
    isLoading: state.UI.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAuthenticated: () => dispatch({ type: SET_AUTHENTICATED })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
