import React, { Component } from "react";
import { Link } from "react-router-dom";

import moment from "moment";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";

import { connect } from "react-redux";
import { $markNotificationsRead } from "../network/userAction";

class Notifications extends Component {
  state = {};

  render() {
    const { notifications, anchorEl, handleClose } = this.props;
    console.log(notifications);
    // if (notifications && notifications.length > 0) {
    // }
    return (
      <div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {notifications &&
            notifications.length &&
            notifications.map(notification => {
              const {
                recipient,
                sender,
                createdAt,
                screamId,
                type,
                read
              } = notification;
              return (
                <MenuItem onClick={handleClose}>
                  <Link
                    color="secondarytext"
                    to={`users/${recipient}/scream/${screamId}`}
                    style={{ display: "flex", color: "sec" }}
                  >
                    {type === "comment" ? (
                      <>
                        <ChatIcon />{" "}
                        {`${sender} has commented your post at ${moment(
                          createdAt
                        )
                          .startOf("hour")
                          .fromNow()} `}{" "}
                      </>
                    ) : (
                      <>
                        <FavoriteIcon />{" "}
                        {`${sender} has likes your post at ${moment(createdAt)
                          .startOf("hour")
                          .fromNow()} `}
                      </>
                    )}
                  </Link>
                </MenuItem>
              );
            })}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // notifications: state.user.notifications
  };
};

export default connect(mapStateToProps, { $markNotificationsRead })(
  Notifications
);
