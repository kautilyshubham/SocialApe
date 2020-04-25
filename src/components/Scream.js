import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CommentIcon from "@material-ui/icons/Comment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";
import { connect } from "react-redux";
import { $deleteScream } from "../network/screamAction";
import DeleteScream from "./DeleteScream";
import keyConst from "../network/keyConst";
import { ShowToast } from "./Toster";
import ScreamDialog from "./ScreamDialog";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Like from "./Like";
import { Icon } from "@material-ui/core";

const useStyles = (theme) => ({
  root: {
    maxWidth: "90%",
    marginBottom: "30px",
  },
  media: {
    height: 240,
  },
  avatar: {
    backgroundColor: "#e91e63",
  },
});

class Scream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: "",
      deleteModal: false,
      detailDialog: false,
      anchorEl: false,
      oldPath: "",
      newPath: "",
    };
  }

  componentDidMount() {
    if (this.props.openDialog && this.props.openDialog === true) {
      this.setState({ detailDialog: true }, () => console.log("open diaglog"));
    }
  }

  deleteScreamHandler = () => {
    this.props.$deleteScream(this.props.screamId, (res) => {
      this.setState({ deleteModal: false });
      ShowToast(keyConst.TOAST_SUCCESS, "Post deleted successfully!");
    });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  openDetailHandler = () => {
    let oldPath = window.location.pathname;
    const { userHandle, screamId } = this.props;
    const newPath = `/users/${userHandle}/scream/${screamId}`;
    this.setState({ detailDialog: true, oldPath: oldPath, newPath: newPath });
    window.history.pushState(null, null, newPath);
  };
  closeDetailHandler = () => {
    window.history.pushState(null, null, this.state.oldPath);
    this.setState({ detailDialog: false, newPath: "" });
  };

  render() {
    const {
      body,
      userHandle,
      createdAt,
      commentCount,
      likeCount,
      userImage,
      classes,
    } = this.props;
    const { deleteModal, detailDialog, anchorEl } = this.state;
    return (
      <>
        <Card className={classes.root}>
          <CardHeader
            avatar={<Avatar alt="" src={userImage} />}
            action={
              <IconButton onClick={this.handleClick} aria-label="options">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <Typography
                component={Link}
                to={`/users/${userHandle}`}
                color="inherit"
                style={{
                  textDecoration: "none",
                  color: "#515151",
                  textTransform: "capitalize",
                  fontSize: 17,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                {userHandle}
              </Typography>
            }
            subheader={moment(createdAt).format("MMMM Do YYYY, h:mm a")}
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem
              onClick={() => {
                this.handleClose();
                this.openDetailHandler();
              }}
            >
              View Detail
            </MenuItem>
            {this.props.authenticated &&
              this.props.userData &&
              this.props.userData[keyConst.CREDENTIALS].handle ===
                userHandle && (
                <MenuItem
                  onClick={() => {
                    this.handleClose();
                    this.setState({ deleteModal: true });
                  }}
                >
                  Delete Post
                </MenuItem>
              )}
          </Menu>

          <CardContent>
            <Typography variant="h6" color="textSecondary" component="h3">
              {body}
            </Typography>
          </CardContent>
          <CardActions>
            <Like screamId={this.props.screamId} />
            <Icon aria-label="comment" style={{ marginLeft: 20 }}>
              <CommentIcon color="primary" />
            </Icon>
            <Typography variant="body2" color="textSecondary" component="p">
              {commentCount} Comments
            </Typography>
          </CardActions>
        </Card>
        <DeleteScream
          status={deleteModal}
          close={() => this.setState({ deleteModal: false })}
          deleteHandle={this.deleteScreamHandler}
        />
        {detailDialog && (
          <ScreamDialog
            status={detailDialog}
            changeStatus={() => this.closeDetailHandler()}
            screamId={this.props.screamId}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
    authenticated: state.user.authenticated,
  };
};

export default withStyles(useStyles)(
  connect(mapStateToProps, {
    $deleteScream,
  })(Scream)
);
