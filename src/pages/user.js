import React, { Component } from "react";
import { connect } from "react-redux";
import { $getOtherProfile } from "../network/screamAction";

import {
  Card,
  Avatar,
  IconButton,
  Link,
  Tooltip,
  Grid,
  withStyles
} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PinDropIcon from "@material-ui/icons/PinDrop";
import LanguageIcon from "@material-ui/icons/Language";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import moment from "moment";

import Scream from "../components/Scream";

const useStyles = theme => ({
  root: {
    maxWidth: 400,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 45,
    "& > *": {
      margin: theme.spacing(1)
    },
    position: "sticky",
    top: "80px"
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  },
  title: {
    fontSize: 14
  }
});

class User extends Component {
  state = {
    user: {},
    screams: [],
    screamIdParam: ""
  };
  componentDidMount() {
    const screamId = this.props.match.params.screamId;
    if (screamId) {
      this.setState({ screamIdParam: screamId });
    }
    this.props.$getOtherProfile(this.props.match.params.handle, res => {
      this.setState({ user: res.user, screams: res.screams });
    });
  }
  render() {
    const { classes } = this.props;
    const {
      imageUrl,
      handle,
      bio,
      location,
      website,
      createdAt
    } = this.state.user;

    const { screamIdParam, screams, user } = this.state;

    const screamRender =
      screams === null ? (
        <Typography component="p" color="textSecondary">
          No post found
        </Typography>
      ) : !screamIdParam ? (
        screams.map(scream => {
          return <Scream key={scream.screamId} {...scream} />;
        })
      ) : (
        screams.map(scream => {
          if (scream.screamId !== screamIdParam) {
            return <Scream key={scream.screamId} {...scream} />;
          } else {
            return (
              <Scream key={scream.screamId} {...scream} openDialog={true} />
            );
          }
        })
      );

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item sm={8} xs={12}>
            {screamRender}
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card className={classes.root}>
              <Avatar alt={handle} src={imageUrl} className={classes.large} />
              <CardContent>
                <Typography gutterBottom component="h5" variant="h5">
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
                    <Link
                      href={website}
                      className={classes.title}
                      rel="noopener noreferrer"
                      color="textSecondary"
                    >
                      {website}
                    </Link>
                  </div>
                )}
                {createdAt && (
                  <div className="profile_desc">
                    <IconButton aria-label="edit">
                      <PermContactCalendarIcon
                        color="primary"
                        fontSize="small"
                      />
                    </IconButton>
                    <Typography className={classes.title} color="textSecondary">
                      {moment(createdAt).format("MMMM Do YYYY")}
                    </Typography>
                  </div>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.UI.loading
  };
};

export default withStyles(useStyles)(
  connect(mapStateToProps, { $getOtherProfile })(User)
);
