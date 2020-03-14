import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { $getAllScreams } from "../network/screamAction";
import { $getUserData, $getAllNotifications } from "../network/userAction";
import Scream from "../components/Scream";
import { connect } from "react-redux";
import keyConst from "../network/keyConst";

import ProfileCard from "../components/Profile";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    screams: [],
    user: ""
  };

  componentDidMount() {
    this.props.$getAllScreams(res => {});
    if (this.props.screamsData.screams) {
      this.setState({ screams: this.props.screamsData.screams });
    }
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.userData.authenticated !== this.props.userData.authenticated
    ) {
      if (this.props.userData.authenticated) {
        this.props.$getUserData(res => {});
        this.props.$getAllNotifications(res => {});
      }
    }

    if (prevProps.screamsData !== this.props.screamsData) {
      this.setState({ screams: this.props.screamsData.screams });
    }
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          {this.state.screams &&
            this.state.screams.map(scream => {
              return <Scream key={scream.screamId} {...scream} />;
            })}
        </Grid>
        <Grid item sm={4} xs={12}>
          <ProfileCard />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    screamsData: state.scream,
    userData: state.user,
    isLoading: state.UI.loading
  };
};

export default connect(mapStateToProps, {
  $getAllScreams,
  $getUserData,
  $getAllNotifications
})(Home);
