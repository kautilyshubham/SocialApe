import React, { useState } from "react";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { $editUserDetail } from "../network/userAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import keyConst from "../network/keyConst";
import { ShowToast } from "./Toster";

const EditProfile = props => {
  const { status, changeStatus } = props;

  const [bio, setBio] = useState();
  const [website, setWebsite] = useState();
  const [location, SetLocation] = useState();

  useEffect(() => {
    const { bio, website, location } = props.userData[keyConst.CREDENTIALS];
    bio ? setBio(bio) : setBio("");
    website ? setWebsite(website) : setWebsite("");
    location ? SetLocation(location) : SetLocation("");
  }, [props.userData]);

  const bioChangeHandler = e => {
    setBio(e.target.value);
  };
  const websitChangeHandler = e => {
    setWebsite(e.target.value);
  };
  const locationChangeHandler = e => {
    SetLocation(e.target.value);
  };

  const editPorofileSubmitHandler = () => {
    if (bio && website && location) {
      const userDetail = {
        bio: bio,
        website: website,
        location: location
      };
      console.log(userDetail, "userdetail");
      props.$editUserDetail(userDetail, res => {
        ShowToast(keyConst.TOAST_SUCCESS, "Profile updated successfully!");
        changeStatus();
      });
    } else {
      ShowToast(keyConst.TOAST_DANGER, "Please fill all the fields!");
    }
  };

  return (
    <Dialog
      open={status}
      onClose={changeStatus}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">Edit your Detail</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            margin="dense"
            id="bio"
            label="Bio"
            type="text"
            fullWidth
            multiline
            rows={3}
            value={bio}
            onChange={e => bioChangeHandler(e)}
          />
          <TextField
            margin="dense"
            id="website"
            label="Website"
            type="text"
            fullWidth
            value={website}
            onChange={e => websitChangeHandler(e)}
          />
          <TextField
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            value={location}
            onChange={e => locationChangeHandler(e)}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={changeStatus} color="secondary">
          Cancel
        </Button>
        <Button
          component={Button}
          onClick={editPorofileSubmitHandler}
          color="primary"
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user,
    isLoading: state.UI.loading
  };
};

export default connect(mapStateToProps, { $editUserDetail })(EditProfile);
