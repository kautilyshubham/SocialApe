import React, { useState } from "react";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { $postScream } from "../network/screamAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import { ShowToast } from "./Toster";
import keyConst from "../network/keyConst";

const PostScream = props => {
  const { status, changeStatus } = props;

  const [postText, setPostText] = useState();
  const [isError, setError] = useState();

  const postChange = e => {
    setPostText(e.target.value);
    setError(false);
  };

  const postScreamHandler = () => {
    if (postText) {
      let screamData = {
        body: postText
      };
      props.$postScream(screamData, res => {
        changeStatus();
        ShowToast(keyConst.TOAST_SUCCESS, "Screams posted successfully!");
        setError(false);
        setPostText("");
      });
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={status}
      onClose={() => {
        changeStatus();
        setError(false);
      }}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">Create a post</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            autoFocus
            margin="dense"
            id="body"
            label="Write something..."
            type="text"
            fullWidth
            multiline
            rows={4}
            value={postText}
            onChange={e => postChange(e)}
            error={isError}
            helperText={isError ? "This field required!" : ""}
          />

          {/* <TextField
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            value=""
            onChange={e => postImage(e)}
          /> */}
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            changeStatus();
            setError(false);
          }}
          color="secondary"
        >
          Cancel
        </Button>
        <Button component={Button} onClick={postScreamHandler} color="primary">
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(null, { $postScream })(PostScream);
