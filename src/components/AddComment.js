import React, { useState } from "react";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { $addComment } from "../network/screamAction";
import { connect } from "react-redux";

const AddComment = props => {
  const { screamId } = props;

  const [postText, setPostText] = useState();
  const [isError, setError] = useState();

  const postChange = e => {
    setPostText(e.target.value);
    setError(false);
  };

  const postCommentHandler = () => {
    if (props.authenticated) {
      if (postText) {
        let commentData = {
          body: postText
        };
        props.$addComment(screamId, commentData, res => {
          setError(false);
          setPostText("");
        });
      } else {
        setError(true);
      }
    } else {
      alert("You are not logged in");
    }
  };

  return (
    <div style={{ margin: "10px 0px" }}>
      <TextField
        margin="dense"
        id="body"
        label="Write your comment..."
        type="text"
        fullWidth
        multiline
        rows={1}
        value={postText}
        onChange={e => postChange(e)}
        error={isError}
        helperText={isError ? "This field required!" : ""}
      />
      <Button
        variant="contained"
        component={Button}
        onClick={postCommentHandler}
        color="primary"
      >
        submit Comment
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.user.authenticated
  };
};

export default connect(mapStateToProps, { $addComment })(AddComment);
