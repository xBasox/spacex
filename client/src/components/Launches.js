import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      details
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <>
        <h1 className="display-6 my-3">Launches</h1>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4 className="mt-5 mb-5">Loading...</h4>;
            if (error) alert(error);

            return (
              <div className="mt-5">
                {data.launches.map((launch) => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Launches;
