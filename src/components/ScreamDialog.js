import React, { Component } from "react";

import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import { $getScream } from "../network/screamAction";
import { connect } from "react-redux";
import moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Comments from "./Comments";
import AddComment from "./AddComment";
import Like from "./Like";

const useStyles = theme => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  },
  title: {
    fontSize: 14
  }
});

class ScreamDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scream: "",
      comments: []
    };
  }

  componentDidMount() {
    this.props.$getScream(this.props.screamId, res => {});
  }
  componentDidUpdate(prevProps) {
    if (prevProps.scream !== this.props.scream) {
      this.setState({ scream: this.props.scream });
    }
    if (prevProps.comments !== this.props.comments) {
      this.setState({ comments: this.props.comments }, () =>
        console.log(this.state.comments, "cooments")
      );
    }
  }

  render() {
    const { classes, status, changeStatus, screamId } = this.props;
    const {
      userImage,
      userHandle,
      body,
      createdAt,
      likeCount,
      commentCount
    } = this.state.scream;

    return (
      <Dialog
        open={status}
        onClose={changeStatus}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        {status && this.state.scream ? (
          <DialogContent>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Avatar alt="" src={userImage} className={classes.large} />
              <Typography variant="h5" color="primary">
                {`@${userHandle}`}
              </Typography>
            </div>
            <Typography
              variant="h6"
              color="textSecondary"
              component="h6"
              style={{ marginBottom: 20, marginTop: 20 }}
            >
              {body}
            </Typography>
            <Typography
              variant="p"
              component="p"
              style={{ marginBottom: 10, color: "#999", fontSize: 14 }}
            >
              {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
            </Typography>
            <div style={{ display: "flex", marginTop: "15px" }}>
              {this.state.scream && (
                <div
                  style={{
                    display: "flex",
                    marginRight: "35px",
                    alignItems: "center"
                  }}
                >
                  <Like screamId={this.props.screamId} />
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center" }}>
                <CommentIcon
                  color="primary"
                  fontSize="small"
                  style={{ marginRight: 10 }}
                />
                <Typography>{commentCount} Comments</Typography>
              </div>
            </div>
            <div>
              <hr />{" "}
            </div>
            <AddComment screamId={this.props.screamId} />
            <Comments comments={this.state.comments} />
          </DialogContent>
        ) : (
          <DialogContent style={{ minHeight: "100px", display: "flex" }}>
            <CircularProgress
              style={{ position: "absolute", top: "40px", left: "50%" }}
              color="secondary"
            />
          </DialogContent>
        )}
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  return {
    scream: state.scream.scream,
    comments: state.scream.scream.comments
  };
};

export default withStyles(useStyles)(
  connect(mapStateToProps, { $getScream })(ScreamDialog)
);
