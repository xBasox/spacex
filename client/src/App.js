import "../node_modules/bootswatch/dist/vapor/bootstrap.min.css";
import "./App.css";
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "/graphql",
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <h1>SpaceX</h1>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}
