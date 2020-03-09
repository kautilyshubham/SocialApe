import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import Link from "@material-ui/core/Link";
import moment from "moment";
import { connect } from "react-redux";
import {
  $likeScream,
  $unlikeScream,
  $deleteScream
} from "../network/screamAction";
import { useEffect } from "react";
import { useState } from "react";
import DeleteScream from "./DeleteScream";
import keyConst from "../network/keyConst";
import { ShowToast } from "./Toster";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "90%",
    marginBottom: "30px"
  },
  media: {
    height: 240
  },
  avatar: {
    backgroundColor: "#e91e63"
  }
}));

const Scream = props => {
  const {
    screamId,
    body,
    userHandle,
    createdAt,
    commentCount,
    likeCount,
    userImage
  } = props;
  const classes = useStyles();

  const [likes, setLikes] = useState();
  const [isLiked, setIsLiked] = useState();
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    setLikes(props.userData.likes);
    setIsLiked(checkLiked());
  }, [props.userData.likes]);

  const checkLiked = () => {
    if (
      props.userData.likes &&
      props.userData.likes.find(like => like.screamId === screamId)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const likeClickHandler = () => {
    if (props.authenticated) {
      const isLiked = checkLiked();
      if (!isLiked) {
        props.$likeScream(screamId, res => {});
      } else {
        props.$unlikeScream(screamId, res => {});
      }
    } else {
      alert("You are not logged in.");
    }
  };

  const deleteScreamHandler = () => {
    props.$deleteScream(screamId, res => {
      setDeleteModal(false);
      ShowToast(keyConst.TOAST_SUCCESS, "Post deleted successfully!");
    });
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar alt="Remy Sharp" src={userImage} />}
          action={
            props.authenticated &&
            props.userData &&
            props.userData.handle === userHandle && (
              <IconButton
                onClick={() => setDeleteModal(true)}
                aria-label="delete"
              >
                <DeleteIcon color="secondary" />
              </IconButton>
            )
          }
          title={
            <Link
              href={`/users/${userHandle}`}
              color="inherit"
              style={{
                textDecoration: "none",
                color: "#515151",
                textTransform: "capitalize",
                fontSize: 17,
                fontWeight: 500,
                cursor: "pointer"
              }}
            >
              {userHandle}
            </Link>
          }
          subheader={moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        />
        {/* <CardMedia
          className={classes.media}
          image="/img/post-placeholder.jpg"
          title="post image"
        /> */}
        <CardContent>
          <Typography variant="h6" color="textSecondary" component="h3">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => likeClickHandler()}
            aria-label="add to favorites"
          >
            {isLiked ? (
              <FavoriteIcon color="secondary" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <Typography variant="body2" color="textSecondary" component="p">
            {likeCount} Likes
          </Typography>
          <IconButton aria-label="comment" style={{ marginLeft: "auto" }}>
            <CommentIcon color="primary" />
          </IconButton>
          <Typography variant="body2" color="textSecondary" component="p">
            {commentCount} Comments
          </Typography>
        </CardActions>
      </Card>
      <DeleteScream
        status={deleteModal}
        close={() => setDeleteModal(false)}
        deleteHandle={deleteScreamHandler}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user[keyConst.CREDENTIALS],
    authenticated: state.user.authenticated
  };
};

export default connect(mapStateToProps, {
  $likeScream,
  $unlikeScream,
  $deleteScream
})(Scream);
