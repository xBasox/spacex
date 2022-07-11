import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      details
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) alert(error);
            console.log(data);

            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              details,
              rocket: { rocket_id, rocket_name, rocket_type },
            } = data.launch;

            return (
              <>
                <h1 className="display-4 my-3">
                  <span className="text-white">Mission: </span> {mission_name}
                </h1>
                <h4 className="mb-3">Short Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Flight Number: {flight_number}
                  </li>
                  <li className="list-group-item">
                    Launch Year: {launch_year}
                  </li>
                  <li className="list-group-item">
                    Launch Successful:{" "}
                    {launch_success ? (
                      <span className="text-success">YES</span>
                    ) : (
                      <span className="text-danger">NO!</span>
                    )}
                  </li>
                </ul>

                <h4 className="my-3">Rocket Details</h4>
                <ul className="list-group mb-4">
                  <li className="list-group-item">
                    Rocket Name: {rocket_name}
                  </li>
                  <li className="list-group-item">
                    Rocket Type: {rocket_type}
                  </li>
                </ul>

                <h4 className="my-3">Details</h4>
                <ul className="list-group mb-4">
                  <li className="list-group-item">{details}</li>
                </ul>

                <Link to="/" className="list-group-item btn-secondary">
                  Back
                </Link>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Launch;
