import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { $getAllScreams } from "../network/screamAction";
import { $getUserData } from "../network/userAction";
import Scream from "../components/Scream";
import { connect } from "react-redux";

import ProfileCard from "../components/Profile";

import "../styles/dashboard.scss";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    screams: [],
    user: "",
  };

  componentDidMount() {
    this.props.$getAllScreams((res) => {});
    if (this.props.screamsData.screams) {
      this.setState({ screams: this.props.screamsData.screams });
    }
    if (this.props.userData.authenticated) {
      this.props.$getUserData((res) => {});
    }
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.userData.authenticated !== this.props.userData.authenticated
    ) {
      if (this.props.userData.authenticated) {
        this.props.$getUserData((res) => {});
      }
    }

    if (prevProps.screamsData.screams !== this.props.screamsData.screams) {
      this.setState({ screams: this.props.screamsData.screams });
    }
  }

  render() {
    return (
      <div className="home_page">
        <div className="container">
          <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
              {this.state.screams &&
                this.state.screams.map((scream) => {
                  return <Scream key={scream.screamId} {...scream} />;
                })}
            </Grid>
            <Grid item sm={4} xs={12}>
              <ProfileCard />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    screamsData: state.scream,
    userData: state.user,
    isLoading: state.UI.loading,
  };
};

export default connect(mapStateToProps, {
  $getAllScreams,
  $getUserData,
})(Home);
