import React, { Component } from "react";

import { Avatar, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import moment from "moment";

const useStyles = theme => ({
  large: {
    width: 100,
    height: 100
  },
  handle: {
    fontSize: 16
  },
  para: {
    fontSize: 12,
    color: "#999",
    marginBottom: 5
  }
});

const Comments = props => {
  const { comments } = props;
  const classes = useStyles();

  return (
    <>
      {comments &&
        comments.map((comment, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                padding: "10px 0px",
                borderTop: "1px solid #ddd"
              }}
            >
              <Avatar className={classes.large} src={comment.userImage} />
              <div style={{ marginLeft: 30 }}>
                <Typography
                  component="h6"
                  variant="h6"
                  color="primary"
                  className={classes.handle}
                >
                  @{comment.userHandle}
                </Typography>
                <Typography
                  component="p"
                  color="textSecondary"
                  className={classes.para}
                >
                  {moment(comment.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </Typography>
                <Typography component="p">{comment.body}</Typography>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Comments;
