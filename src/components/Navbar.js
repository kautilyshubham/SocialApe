import React, { Component } from "react";
import { Link } from "react-router-dom";
// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { $logoutUser } from "../network/userAction";
import AddIcon from "@material-ui/icons/Add";
import { IconButton, Tooltip } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PostScream from "./PostScream";
import Badge from "@material-ui/core/Badge";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isPostScream: false
  };
  render() {
    return (
      <>
        <AppBar>
          <Toolbar style={{ width: "90%", margin: "0 auto" }}>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              SocialApe
            </Typography>
            {this.props.authenticated ? (
              <div className="navbar_right">
                <Tooltip title="Create a post">
                  <IconButton
                    style={{ color: "#fff" }}
                    onClick={() => {
                      this.setState({ isPostScream: true });
                    }}
                    aria-label="share"
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Home">
                  <IconButton
                    style={{ color: "#fff" }}
                    onClick={() => {}}
                    aria-label="share"
                  >
                    <HomeIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Notifications">
                  <IconButton
                    style={{ color: "#fff" }}
                    onClick={() => {}}
                    aria-label="share"
                  >
                    <Badge
                      badgeContent={
                        this.props.notifications
                          ? this.props.notifications.length
                          : 0
                      }
                      color="secondary"
                    >
                      <NotificationsIcon fontSize="small" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            ) : (
              <div className="navbar_right">
                <Button component={Link} to="/" color="inherit">
                  Home
                </Button>
                <Button component={Link} to="/login" color="inherit">
                  Login
                </Button>
                <Button component={Link} to="/signup" color="inherit">
                  Signup
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <PostScream
          status={this.state.isPostScream}
          changeStatus={() => this.setState({ isPostScream: false })}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.user.authenticated,
    notifications: state.user.notifications
  };
};

export default connect(mapStateToProps, { $logoutUser })(Navbar);
