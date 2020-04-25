import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Avatar,
  IconButton,
  Button,
  Tooltip,
  Link as Anchor,
} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Badge from "@material-ui/core/Badge";
import CardActions from "@material-ui/core/CardActions";
import PinDropIcon from "@material-ui/icons/PinDrop";
import LanguageIcon from "@material-ui/icons/Language";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import moment from "moment";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { $uploadProfileImage, $logoutUser } from "../network/userAction";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import keyConst from "../network/keyConst";
import { ShowToast } from "./Toster";
import EditProfile from "./EditProfile";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 45,
    "& > *": {
      margin: theme.spacing(1),
    },
    position: "sticky",
    top: "80px",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  title: {
    fontSize: 14,
  },
}));

const Profile = (props) => {
  const {
    handle,
    imageUrl,
    bio,
    location,
    website,
    createdAt,
  } = props.userData[keyConst.CREDENTIALS];
  const classes = useStyles();

  const [editProfile, setEditProfile] = useState(false);

  const clickInput = () => {
    const fileInput = document.getElementById("profileImg");
    fileInput.click();
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    console.log(image);

    const formData = new FormData();
    formData.append("image", image, image.name);
    props.$uploadProfileImage(formData, (res) => console.log(res));
  };

  const handleLogout = () => {
    props.$logoutUser((success) => {
      ShowToast(keyConst.TOAST_SUCCESS, "Logout successfull !");
    });
  };

  const handleClickOpen = () => {
    setEditProfile(true);
  };

  const handleClose = () => {
    setEditProfile(false);
  };

  return (
    <>
      {handle && props.isLoading === false ? (
        <Card className={classes.root}>
          <Badge
            badgeContent={
              <Tooltip title="Edit image">
                <IconButton onClick={() => clickInput()} aria-label="share">
                  <EditIcon color="primary" fontSize="small" />
                </IconButton>
              </Tooltip>
            }
          >
            <Avatar alt={handle} src={imageUrl} className={classes.large} />
            <input
              type="file"
              name="profiel"
              id="profileImg"
              onChange={(e) => handleImageChange(e)}
              hidden
              accept="image/png, image/jpeg"
            />
          </Badge>
          <CardContent>
            <Typography
              gutterBottom
              component={Link}
              to={`/users/${handle}`}
              variant="h5"
              color="primary"
            >
              {handle}
            </Typography>
            {bio && <Typography component="p">{bio}</Typography>}
            {location && (
              <div className="profile_desc">
                <IconButton aria-label="edit">
                  <PinDropIcon color="primary" fontSize="small" />
                </IconButton>
                <Typography className={classes.title} color="textSecondary">
                  {location}
                </Typography>
              </div>
            )}
            {website && (
              <div className="profile_desc">
                <IconButton aria-label="edit">
                  <LanguageIcon color="primary" fontSize="small" />
                </IconButton>
                <Anchor
                  href={website}
                  className={classes.title}
                  rel="noopener noreferrer"
                  color="textSecondary"
                >
                  {website}
                </Anchor>
              </div>
            )}
            {createdAt && (
              <div className="profile_desc">
                <IconButton aria-label="edit">
                  <PermContactCalendarIcon color="primary" fontSize="small" />
                </IconButton>
                <Typography className={classes.title} color="textSecondary">
                  {moment(createdAt).format("MMMM Do YYYY")}
                </Typography>
              </div>
            )}
          </CardContent>
          <CardActions disableSpacing>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleClickOpen()}
            >
              Update Profile
            </Button>
            <IconButton aria-label="edit" onClick={() => handleLogout()}>
              <ExitToAppIcon color="secondary" />
            </IconButton>
          </CardActions>
        </Card>
      ) : (
        <Paper align="center">
          <Typography gutterBottom align="center" component="p">
            No profile found! please login
          </Typography>
          <Button
            component={Link}
            varient="contained"
            color="primary"
            to="/login"
          >
            Login
          </Button>
          <Button
            component={Link}
            varient="contained"
            color="secondary"
            to="/signup"
          >
            Signup
          </Button>
        </Paper>
      )}

      <EditProfile status={editProfile} changeStatus={() => handleClose()} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
    isLoading: state.UI.loading,
  };
};

export default connect(mapStateToProps, { $uploadProfileImage, $logoutUser })(
  Profile
);
