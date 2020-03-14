import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { connect } from "react-redux";
import { $likeScream, $unlikeScream } from "../network/screamAction";
import Typography from "@material-ui/core/Typography";

class Like extends Component {
  state = {
    isLiked: ""
  };

  componentDidMount() {
    const isLiked = this.checkLiked();
    this.setState({ isLiked: isLiked });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userData.likes !== this.props.userData.likes) {
      const isLiked = this.checkLiked();
      this.setState({ isLiked: isLiked });
    }
  }

  checkLiked = () => {
    if (
      this.props.userData.likes &&
      this.props.userData.likes.find(
        like => like.screamId === this.props.screamId
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  likeClickHandler = () => {
    if (this.props.authenticated) {
      const isLiked = this.checkLiked();
      if (!isLiked) {
        this.props.$likeScream(this.props.screamId, res => {});
      } else {
        this.props.$unlikeScream(this.props.screamId, res => {});
      }
    } else {
      alert("You are not logged in.");
    }
  };

  render() {
    const { isLiked } = this.state;
    return (
      <>
        <IconButton
          onClick={() => this.likeClickHandler()}
          aria-label="add to favorites"
        >
          {isLiked ? (
            <FavoriteIcon color="secondary" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
          {this.props.likeCount} Likes
        </Typography>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.user,
    authenticated: state.user.authenticated
  };
};

export default connect(mapStateToProps, {
  $likeScream,
  $unlikeScream
})(Like);
